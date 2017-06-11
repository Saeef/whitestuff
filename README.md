# 10334 :boom: whitestuff site  :rocket:

### background  :bell:
- Low stock levels were a cause of frustration     
- users commented on the high levels of out of stocks. This could force users to shop elsewhere     

### objective :book:
Adding a shop by size filter to appear as a sticky footer on the product listing page prompts the user    
to select their sizes earlier in the journey to avoid viewing products not in their size.    

### design changes: ** dom injected - javascript **   :pencil:
- add size filter popup on the bottom towards right of screen
- list sizes vertically across 3 columns
- when user has selected a size display a tick in the size box
- when popup is closed use - in top right hand corner to close
- when popup is close user + in top right hand corner to open
- before user has selected a size display text "Select several sizes to broaden your choices"
#### considerations  :watch: 
- same functionality as 'refine by size' filter on right hand navigation.
- results page auto update once user has selected a size
- sticky in its position on the screen
- when user land on any of listed URL's display open popup
- if user closes the popup and then moves onto another listed URL keep it closed
- when user selects a size then moves onto another listed URL display popup with unselected sizes once    
  again. Don't carry forward sizes across categories.

### notes
- click on minus sign to switch to plus sign and vice-versa
- if minus-sign, then you\'re able to check boxes.
- if one or more boxes are checked,subheading 1 changes to subheading 2
- if switched from minus to plus, all checkboxes are removed and you\'re    
  not able to check any boxes
- if subheading2 on, then it also switches back to subheading1 (full reset) 

- updated existing project
-   iniState function sets popup to filter initial values
-   TroubleShoot board lists initial size value, index in array  and function execution context
-   pairing function keeps tracks of changes on filter and updates popup values
-   troubleshoot board keeps tracks of last clicked value, selector and function execution context
-   reverse pairing function, tracks events on popup to generate filter clicks
-   troubleshoot board tracks class adding and removing






<kbd>initState function</kbd> :rocket:        
![](/images/iniStatefn.png) 


<kbd>pairing function</kbd> :rocket:          
![](/images/pairingfn.png) 



<kbd>troubled board if none selected</kbd>  :rocket:      
![](/images/noneselectedTB.png)
 
 
 <kbd>control image</kbd> :rocket:       
 ![](/images/whiteStuff.png)
