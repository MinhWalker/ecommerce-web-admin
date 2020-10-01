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
                    <tr class="mdc-data-table__row" v-for="user in userListResponse" :key="user.phone">
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
                            >{{user.fullName}}</td>
                            <td
                                class="mdc-data-table__cell mdc-data-table__cell--numeric"
                                style="text-align: left; vertical-align: middle;"
                            >{{user.email}}</td>
                            <td
                                class="mdc-data-table__cell"
                                style="text-align: left; vertical-align: middle;"
                            >{{user.phone}}</td>
                            <td
                                class="mdc-data-table__cell"
                                style="text-align: left; vertical-align: middle;"
                            >{{user.address}}</td>
                            <td
                                class="mdc-data-table__cell"
                                style="text-align: left; vertical-align: middle;"
                            >{{formatDate(user.createdAt)}}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { useUser } from "../stores/userStore";
import { parseDate } from "../helper/timeFormat";

export default {
    name: 'Account',
    setup() {
        const { userListResponse, getUserList } = useUser();
        getUserList();

        const formatDate = (d) => {
            return parseDate(d);
        };

        return {
            userListResponse,
            formatDate,
        };
    }
};
</script>