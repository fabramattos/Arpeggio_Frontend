document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const artistInput = document.getElementById('artistInput');
    const resultsSection = document.getElementById('resultsSection');
    const resultsGrid = document.getElementById('resultsGrid');
    const queryTerm = document.getElementById('queryTerm');

    const searchTypeInputs = document.getElementsByName('searchType');
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

    searchBtn.addEventListener('click', handleSearch);
    artistInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Placeholder is now static, so we don't need the change listener for that.
    // But we might want to keep track of the type if needed for other UI logic.

    function handleSearch() {
        const query = artistInput.value.trim();
        if (!query) return;

        const searchType = document.querySelector('input[name="searchType"]:checked').value;

        // Show loading state
        searchBtn.textContent = 'Buscando...';
        searchBtn.disabled = true;

        // Real API call
        fetchData(query, searchType)
            .then(data => {
                displayResults(data);
            })
            .catch(err => {
                console.error('Erro:', err);
                alert('Ocorreu um erro ao buscar os dados. Verifique o console para mais detalhes.');
            })
            .finally(() => {
                searchBtn.textContent = 'Comparar';
                searchBtn.disabled = false;
            });
    }

    async function fetchData(query, searchType) {
        let url = '';
        const params = new URLSearchParams({
            nome: query,
            regiao: 'BR'
        });

        if (searchType === 'artist') {
            url = `${API_BASE_URL}/v1/artista`;
            params.append('tipo', 'ALBUM,SINGLE');
        } else {
            url = `${API_BASE_URL}/v1/podcast`;
        }

        const response = await fetch(`${url}?${params.toString()}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }

    function displayResults(data) {
        queryTerm.textContent = data.busca;
        resultsGrid.innerHTML = '';
        resultsSection.classList.remove('hidden');

        if (!data.resultados || data.resultados.length === 0) {
            resultsGrid.innerHTML = '<p class="no-results">Nenhum resultado encontrado.</p>';
            return;
        }

        data.resultados.forEach(result => {
            const card = document.createElement('div');
            card.className = 'result-card';

            const title = document.createElement('div');
            title.className = 'streaming-name';
            title.textContent = result.streaming;

            card.appendChild(title);

            if (result.erro) {
                card.classList.add('error');
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-msg';
                errorMsg.textContent = result.erro;
                card.appendChild(errorMsg);
            } else {
                const count = document.createElement('div');
                count.className = 'album-count';

                const label = document.createElement('div');
                label.style.fontSize = '0.9rem';
                label.style.color = 'var(--text-secondary)';

                // Check if it's podcast (episodios) or artist (albuns)
                // The API response structure varies, so we check property existence
                if (result.episodios !== undefined) {
                    count.textContent = result.episodios;
                    label.textContent = 'Episódios';
                } else {
                    count.textContent = result.albuns;
                    label.textContent = 'Álbuns';
                }

                card.appendChild(count);
                card.appendChild(label);

                if (result.consulta) {
                    const matched = document.createElement('div');
                    matched.className = 'result-matched';
                    matched.title = `Retornado: ${result.consulta}`;

                    const matchedLabel = document.createElement('span');
                    matchedLabel.className = 'matched-label';
                    matchedLabel.textContent = 'Retornado:';

                    const matchedName = document.createElement('span');
                    matchedName.className = 'matched-name';
                    matchedName.textContent = result.consulta;

                    matched.appendChild(matchedLabel);
                    matched.appendChild(matchedName);
                    card.appendChild(matched);
                }
            }

            resultsGrid.appendChild(card);
        });

        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
});
