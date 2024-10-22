import menu_item
import menu_manager


def add_item_to_menu():
    item_name = input("Specify your item to add: ")
    item_price = input("Specify price of the new item: ")
    new_item = menu_item.MenuItem(item_name, item_price)
    new_item.save()
    print("Item was added successfully.")


def remove_item_from_menu():
    del_item_name = input("Specify your item to delete: ")
    del_item = menu_item.MenuItem(del_item_name)
    del_item.delete()
    if menu_manager.MenuManager.get_by_name(del_item_name):
        print("Some error occurred")
    else:
        print("Deleted successfully")


def update_item_from_menu():
    old_item_name = input("Specify your item name to update: ")
    new_item_name = input("Specify new name for your item: ")
    new_item_price = input("Specify new price for your item: ")
    update_item = menu_item.MenuItem(old_item_name)
    update_item.update(new_item_name, new_item_price)
    if menu_manager.MenuManager.get_by_name(new_item_name):
        print("Updated successfully")
    else:
        print("Some error occurred")


def show_user_menu():
    flag = True
    while flag:
        u_input = input(
            "Please, select one of the following:\nView an Item (V)\nAdd an Item (A)\nDelete an Item (D)\nUpdate an Item (U)\nShow the Menu (S)\nQuit (Q)"
        )
        if u_input.lower() == "v":
            item_name = input("Specify your item: ")
            print(menu_manager.MenuManager.get_by_name(item_name))
        elif u_input.lower() == "a":
            add_item_to_menu()
        elif u_input.lower() == "d":
            remove_item_from_menu()
        elif u_input.lower() == "u":
            update_item_from_menu()
        elif u_input.lower() == "s":
            print(menu_manager.MenuManager.all_items())
        elif u_input.lower() == "q":
            print(menu_manager.MenuManager.all_items())
            flag = False


show_user_menu()
