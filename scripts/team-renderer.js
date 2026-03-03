class TeamRenderer {
    constructor(containerId, data, startColor = 'purple') {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.startColor = startColor;
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = '';
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        
        this.data.forEach((member, index) => {
            const color = this.getCardColor(index);
            const card = this.createCard(member, color);
            gridContainer.appendChild(card);
        }); 
        this.container.appendChild(gridContainer);
    }

    getCardColor(index) {
        const width = window.innerWidth;
        
        if (width > 768) {
            const rowIndex = Math.floor(index / 4);
            const colIndex = index % 4;
            
            if (rowIndex % 2 === 0) {
                return this.startColor === 'purple' 
                    ? (colIndex % 2 === 0 ? 'purple' : 'green')
                    : (colIndex % 2 === 0 ? 'green' : 'purple');
            } 
            else {
                return this.startColor === 'purple'
                    ? (colIndex % 2 === 0 ? 'green' : 'purple')
                    : (colIndex % 2 === 0 ? 'purple' : 'green');
            }
        } else if (width > 320 && width <= 768) {
            const rowIndex = Math.floor(index / 2);
            const colIndex = index % 2;
            
            if (rowIndex % 2 === 0) {
                return this.startColor === 'purple'
                    ? (colIndex === 0 ? 'purple' : 'green')
                    : (colIndex === 0 ? 'green' : 'purple');
            } 
            else {
                return this.startColor === 'purple'
                    ? (colIndex === 0 ? 'green' : 'purple')
                    : (colIndex === 0 ? 'purple' : 'green');
            }
        } 
        else {
            return index % 2 === 0 ? this.startColor : (this.startColor === 'purple' ? 'green' : 'purple');
        }
    }

    createCard(member, color) {
        const card = document.createElement('div');
        card.className = `team-card-${color}`;
        
        const borderDiv = document.createElement('div');
        borderDiv.className = `team-border-${color}`;
        
        const imgDiv = document.createElement('div');
        imgDiv.className = 'team-img';
        if (member.image) {
            imgDiv.style.backgroundImage = `url(../images/${member.image})`;
        } 
        else {
            imgDiv.style.backgroundImage = `url(../images/default-avatar.jpg)`;
        }
        
        borderDiv.appendChild(imgDiv);
        card.appendChild(borderDiv);
        
        const nameP = document.createElement('p');
        nameP.className = color === 'purple' ? 'purple-shadow' : 'yellow-text';

        const nameParts = member.name.split(' ');
        if (nameParts.length > 2 && member.name.length > 20) {
            if (nameParts.length === 3) {
                nameP.innerHTML = `${nameParts[0]}<br>${nameParts[1]}<br>${nameParts[2]}`;
            } 
            else if (nameParts.length === 4) {
                nameP.innerHTML = `${nameParts[0]}<br>${nameParts[1]} ${nameParts[2]}<br>${nameParts[3]}`;
            } 
            else {
                nameP.textContent = member.name;
            }
        } 
        else {
            nameP.textContent = member.name;
        }
        
        card.appendChild(nameP);
        return card;
    }
}