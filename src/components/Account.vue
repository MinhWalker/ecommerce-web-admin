<template>
    <div class="mdc-data-table">
        <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Dessert calories" style="width: 100%;">
                <thead>
                    <tr class="mdc-data-table__header-row" style="width: 50px;">
                        <th 
                            class="mdc-data-table__header-cell" 
                            role="columnheader" scope="col" 
                            style="text-align: left; vertical-align: middle; font-weight: bold; width: 50px;"
                        >Avatar</th>
                        <th 
                            class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" 
                            role="columnheader" 
                            scope="col"
                            style="text-align: left; vertical-align: middle; font-weight: bold; width: 100px;"
                        >Name</th>
                        <th 
                            class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" 
                            role="columnheader" 
                            scope="col"
                            style="text-align: left; vertical-align: middle; font-weight: bold; width: 150px;"
                        >Email</th>
                        <th 
                            class="mdc-data-table__header-cell" 
                            role="columnheader" 
                            scope="col"
                            style="text-align: left; vertical-align: middle; font-weight: bold; width: 90px;"
                        >Phone</th>
                        <th 
                            class="mdc-data-table__header-cell" 
                            role="columnheader" 
                            scope="col"
                            style="text-align: left; vertical-align: middle; font-weight: bold; width: 200px;"
                        >Address</th>
                        <th 
                            class="mdc-data-table__header-cell" 
                            role="columnheader" 
                            scope="col"
                            style="text-align: left; vertical-align: middle; font-weight: bold; width: 150px;"
                        >Created</th>
                    </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                    <tr class="mdc-data-table__row">
                        <th class="mdc-data-table__cell" scope="row" style="position: relative;">
                            <img
                                src="https://picsum.photos/id/237/200/300"
                                width="35"
                                height="35"
                                style="position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);border-radius: 50%;"
                            />
                        </th>
                        <td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                                style="text-align: left; vertical-align: middle;"
                            >MinhDt</td>
                            <td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                                style="text-align: left; vertical-align: middle;"
                            >Minhnh@gmail.com</td>
                            <td
                                class="mdc-data-table__cell"
                                style="text-align: left; vertical-align: middle;"
                            >1234567</td>
                            <td
                                class="mdc-data-table__cell"
                                style="text-align: left; vertical-align: middle;"
                            >Ha Noi</td>
                            <td
                                class="mdc-data-table__cell"
                                style="text-align: left; vertical-align: middle;"
                            >sds</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Account',
};
</script>