//LIFE SCRIPT BY 곱등연가//
    //NO REWRITE!!!//
     // ↖(^o^)↗ //

var name = "손님"
var money = 1000;
var shop_x = 0;
var shop_y = 0;
var shop_z = 0;
var shop_price = 0;
var job = "non"
var playerx = 0;
var playery = 0;
var playerz = 0;
var itemid = 0;
var number = 0;

function newLevel()
{
   print("LIFE SCRIPT 1.0.0 By 곱등연가");
   print("무단수정이나 배포를 금합니다.");
}

function useItem(x, y, z, itemId, blockId)
{
    if (itemId == 280)
    {
        shop_x = x;
        shop_y = y;
        shop_z = z;
        print("z " + shop_x + " y " + shop_y + " z " + shop_z);

    }
    if (blockId == 63)
    {
        print("price:" + shop_price);

    }
    
    if (blockId == 43 && shop_price <= money)
    {
        money = money - shop_price
        addItemInventory(itemid, number);
    }
    if (itemId == 17 && job == "woodcutter")
    {
        money = money + 150;

    }
}
function modTick()
{
    
}
function procCmd(cmd)
{
    var Data = cmd.split(" ");
    if (Data[0] == "name")
    {
        name = Data[1]
        print("Your name" + " " + name + " " + "setting complete ");
    }
    if (Data[0] == "money")
    {
        print("Your money:" + money);
    }

    if (Data[0] == "shop")
    {
        setTile(parseInt(Data[1]), parseInt(Data[2]) + 1, parseInt(Data[3]), 54);
        setTile(parseInt(Data[1]) + 1, parseInt(Data[2]) + 1, parseInt(Data[3]), 63);
        setTile(parseInt(Data[1]), parseInt(Data[2]) + 1, parseInt(Data[3]), 43);

        print("add shop!");
    }

    if (Data[0] == "shopset")
    {
        shop_price = Data[1]
        itemid = Data[2]
        number = Data[3]

        print("price:" + shop_price + " " + itemid + " " + number + " " + "setting complete");

    }

    if (Data[0] == "job")
    {
        job = Data[1]
        print("job select!");

    }
}
