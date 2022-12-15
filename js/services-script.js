$(document).ready(function () {
    loadHeadsetData();

    $('#headset').click(
        function () {
            loadHeadsetData();
        }
    )

    $('#keyboard').click(
        function () {
            loadKeyboardData();
        }
    )

    $('#mice').click(
        function () {
            loadMiceData();
        }
    )

});

renderCards = (pagedData, route) => {
    pagedData.data[pagedData.currentPage - 1].forEach((cardData) => {
        $('#card-holder').append(
            getCard(cardData, route)
        );
    });
}

getCard = (cardData, route) => {

    return `
    <a href="/${route}.html">
    <section class="Servcard ">
        <div class="imgBx">

            <img src="${cardData.image}">

        </div>
        <div class="contentBx">
            <h2>${cardData.title}</h2>
            <div class="size">
                <h3 class="text-muted">${cardData.model}</h3>

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
            title: 'Razer',
            price: 105,
            image: './images/headphones_home.png',
            model: 'Razer Kraken Ultimate RGB',
        },
        {
            title: 'Logitech',
            price: 126,
            image: './images/headset-2.png',
            model: 'Logitech G733 Lightspeed',
        },
        {
            title: 'Razer',
            price: 80,
            image: './images/headset-3.png',
            model: 'Razer Kraken Pro 5.1',
        },
        {
            title: 'MSI',
            price: 30,
            image: './images/headset-4.png',
            model: 'MSI Immerse GH50',
        },
        {
            title: 'Corsair',
            price: 64,
            image: './images/headset-5.png',
            model: 'Corsair Void RGB Elite ',
        },
        {
            title: 'Corsair',
            price: 130,
            image: './images/headset-6.png',
            model: 'Corsair HS80 RGB',
        },
        {
            title: 'MSI',
            price: 50,
            image: './images/headset-7.png',
            model: 'MSI IMMERSE HH23',
        },
        {
            title: 'Logitech',
            price: 80,
            image: './images/headset-8.png',
            model: 'Logitech G435 LIGHTSPEED',
        },
        {
            title: 'Razer',
            price: 90,
            image: './images/headset-9.png',
            model: 'Razer BlackShark V2 X',
        },
    ]
}

getKeyboardData = () => {
    return [
        {
            title: 'CORSAIR 1',
            price: 105,
            image: './images/Keyboard-1.png',
            model: 'CORSAIR K55 RGB',
        },
        {
            title: 'Razer',
            price: 92,
            image: './images/Keyboard-3.png',
            model: 'Razer Cynosa Chroma',
        },
        {
            title: 'MSI',
            price: 120,
            image: './images/Keyboard-4.png',
            model: 'MSI Vigor GK30 RGB',
        },
        {
            title: 'MSI',
            price: 400,
            image: './images/Keyboard-6.png',
            model: 'MSI Vigor GK71 Sonic',
        },
        {
            title: 'Razer',
            price: 88,
            image: './images/Keyboard-7.png',
            model: 'Razer BlackWidow V3 ',
        },
        {
            title: 'CORSAIR',
            price: 133,
            image: './images/Keyboard-8.png',
            model: 'CORSAIR K100 RGB',
        },
        {
            title: 'Logitech',
            price: 170,
            image: './images/Keyboard-9.png',
            model: 'Logitech G PRO',
        },
        {
            title: 'Logitech',
            price: 99,
            image: './images/Keyboard-10.png',
            model: 'Logitech G815 LIGHTSYNC',
        },
        {
            title: 'Logitech',
            price: 86,
            image: './images/Keyboard-11.png',
            model: 'Logitech MK270',
        },
    ]
}

getMiceData = () => {
    return [
        {
            title: 'Razer',
            price: 105,
            image: './images/Mouse-1.png',
            model: 'Razer DeathAdder V2',
        },
        {
            title: 'Logitech ',
            price: 93,
            image: './images/Mouse-2.png',
            model: 'Logitech G502 HERO',
        },
        {
            title: 'Logitech ',
            price: 97,
            image: './images/Mouse-3.png',
            model: 'Logitech G305 LIGHTSPEED',
        },
        {
            title: 'MSI',
            price: 77,
            image: './images/Mouse-5.png',
            model: 'MSI Clutch GM20 Elite',
        },
        {
            title: 'Corsair',
            price: 30,
            image: './images/Mouse-6.png',
            model: 'Corsair Scimitar RGB Elite',
        },
        {
            title: 'MSI',
            price: 110,
            image: './images/Mouse-7.png',
            model: 'MSI Clutch SD40',
        },
        {
            title: 'Corsair',
            price: 130,
            image: './images/Mouse-8.png',
            model: 'Corsair Nightsword RGB',
        },
        {
            title: 'Razer',
            price: 80,
            image: './images/Mouse-4.png',
            model: 'Razer Viper Ultimate',
        },
        {
            title: 'Corsair',
            price: 70,
            image: './images/Mouse-9.png',
            model: 'CORSAIR M65 Pro RGB',
        },
    ]
}

loadHeadsetData = () => {
    removeCards();
    let data = getHeadsetData();
    let pagedData = getPagination(data);
    renderCards(pagedData, './ProductHeadset');
}

loadKeyboardData = () => {
    removeCards();
    let data = getKeyboardData();
    let pagedData = getPagination(data);
    renderCards(pagedData, './ProductKeyboard');
}

loadMiceData = () => {
    removeCards();
    let data = getMiceData();
    let pagedData = getPagination(data);
    renderCards(pagedData, './ProductMouse');
}