$(document).ready(function () {
    loadHeadsetData();

    $('#lol').click(

        function () {

            loadMiceData();

        }

    )
});

renderCards = (pagedData) => {
    pagedData.data[pagedData.currentPage - 1].forEach((cardData) => {
        $('#card-holder').append(
            getCard(cardData)
        );
    });
}

getCard = (cardData) => {

    return `
    
    <a href="/Home.html">
    <section class="Servcard ">
        <div class="imgBx">

            <img src="${cardData.image}">

        </div>
        <div class="contentBx">
            <h2>${cardData.title}</h2>
            <div class="size">
                <h3 class="text-muted">Model: ${cardData.model}</h3>

            </div>
            <div class="color">
                <h3>$${cardData.price}</h3>

            </div>

        </div>
    </section>
</a>
   `
}

getPagination = (data) => {
    let pagedData = {
        totalPages: undefined,
        currentPage: 1,
        data: undefined
    };
    pagedData.totalPages = Math.ceil(data.length / 9);
    // pagedData.data = data.slice(0, 9);
    //slice array into chunks of 9
    pagedData.data = data.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 9);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
    return pagedData;
}

removeCards = () => {
    $('#card-holder').empty();
}

getHeadsetData = () => {
    return [
        {
            title: 'headset 1',
            price: 105,
            image: './images/headphones_home.png',
            model: 'Pixel 3',
        },
        {
            title: 'Apple',
            price: 200,
            image: './images/headphones_home.png',
            model: 'iPhone 11',
        },
        {
            title: 'Samsung',
            price: 300,
            image: './images/headphones_home.png',
            model: 'Galaxy S10',
        },
        {
            title: 'Huawei',
            price: 400,
            image: './images/headset-4.png',
            model: 'P30 Pro',
        },
        {
            title: 'Xiaomi',
            price: 500,
            image: './images/headset-5.png',
            model: 'Mi 9',
        },
        {
            title: 'OnePlus',
            price: 600,
            image: './images/headset-6.png',
            model: '7 Pro',
        },
        {
            title: 'Oppo',
            price: 700,
            image: './images/headset-7.png',
            model: 'Reno 2',
        },
        {
            title: 'HTC',
            price: 800,
            image: './images/headset-8.png',
            model: 'U19e',
        },
        {
            title: 'Nokia',
            price: 900,
            image: './images/headset-9.png',
            model: '8.1',
        },
    ]
}

getKeyboardData = () => {
    return [
        {
            title: 'Keyboard 1',
            price: 105,
            image: './images/headphones_home.png',
            model: 'Pixel 3',
        },
        {
            title: 'Apple',
            price: 200,
            image: './images/headphones_home.png',
            model: 'iPhone 11',
        },
        {
            title: 'Samsung',
            price: 300,
            image: './images/headphones_home.png',
            model: 'Galaxy S10',
        },
        {
            title: 'Huawei',
            price: 400,
            image: './images/headset-4.png',
            model: 'P30 Pro',
        },
        {
            title: 'Xiaomi',
            price: 500,
            image: './images/headset-5.png',
            model: 'Mi 9',
        },
        {
            title: 'OnePlus',
            price: 600,
            image: './images/headset-6.png',
            model: '7 Pro',
        },
        {
            title: 'Oppo',
            price: 700,
            image: './images/headset-7.png',
            model: 'Reno 2',
        },
        {
            title: 'HTC',
            price: 800,
            image: './images/headset-8.png',
            model: 'U19e',
        },
        {
            title: 'Nokia',
            price: 900,
            image: './images/headset-9.png',
            model: '8.1',
        },
    ]
}

getMiceData = () => {
    return [
        {
            title: 'mouse 1',
            price: 105,
            image: './images/headphones_home.png',
            model: 'Pixel 3',
        },
        {
            title: 'Apple',
            price: 200,
            image: './images/headphones_home.png',
            model: 'iPhone 11',
        },
        {
            title: 'Samsung',
            price: 300,
            image: './images/headphones_home.png',
            model: 'Galaxy S10',
        },
        {
            title: 'Huawei',
            price: 400,
            image: './images/headset-4.png',
            model: 'P30 Pro',
        },
        {
            title: 'Xiaomi',
            price: 500,
            image: './images/headset-5.png',
            model: 'Mi 9',
        },
        {
            title: 'OnePlus',
            price: 600,
            image: './images/headset-6.png',
            model: '7 Pro',
        },
        {
            title: 'Oppo',
            price: 700,
            image: './images/headset-7.png',
            model: 'Reno 2',
        },
        {
            title: 'HTC',
            price: 800,
            image: './images/headset-8.png',
            model: 'U19e',
        },
        {
            title: 'Nokia',
            price: 900,
            image: './images/headset-9.png',
            model: '8.1',
        },
    ]
}

loadHeadsetData = () => {
    removeCards();
    let data = getHeadsetData();
    let pagedData = getPagination(data);
    renderCards(pagedData);
}

loadKeyboardData = () => {
    removeCards();
    let data = getKeyboardData();
    let pagedData = getPagination(data);
    renderCards(pagedData);
}

loadMiceData = () => {
    removeCards();
    let data = getMiceData();
    let pagedData = getPagination(data);
    renderCards(pagedData);
}