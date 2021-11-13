const server = require('./src/app.js');
const { User, Contract, conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {

  try {

    const users = [
      { id: "883ba5c8-52d4-458f-ab8f-69f35ad50739", name: "Benito", last_name: "Wyldish", username: "benito", email: "benito@gmail.com", birthday: "11/03/1955", country: "Haquira", password: "benito", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJwSURBVDjLpVNNaxNRFD2TzOSTpFgZCg0JJPEDCaK48wNaEzS4cOlCsIgEXHWrCC3FRQXBP+BWCrpyKcZImhZmYdwVUaolIWXSGGPJpLHNJJnJjPdNnTBFXDlwuPe9eefcc98HZ5om/ufj7aRcLhdHo1Fa13VQBItOaJrmzFdzuVyG8TjmgMgzfr9/LZFIYDgc/lXF6VIQBJRKJciynJmfn1+1HJDq0uTkJJrNJrxe75jkJLK8Xq8jHA4jmUyiWq0u0PQqJ0nSTCAQWIvFYuh2u5YDG8wuI3IcB7fbbVUPhUIIBoMoFouo1WoZnvpZEkXR6pEt8vl8FuzqTicsGoaBfr+PVCqFra2tBZ5VUVUV7XYbg8FgvIhtJIv22J5jY57nMTExYTlkAmlWWVEU9Hq9I4R/CbAWIpEIc53m7eMpFApHBJyWnTmLjMxOzHaAr419tKayWLw7i82WjoDHhV/tH/jwZQf13X1cPR/FyUQc7Z6BM1MCll+UIFV6loCLOagpJu5lU2h0DfSGJrw8Z5GvnRLw4LqI9Q0Zfg+HgW5iW9GxNHcR8h7GAvnKdh0+Dw9tdLjbLg6YPRfF+28anhV+YoZydXj4TxsBfc1Eq9Vie5K3buLtp+/uXElNr1y+cBq6YWI67IZfcEFwgxwZ2Gho6Kq0kaQRPcbThZLxWqo8Jr0nrj8X7a30uZGX6zs4cZy3yCMSPqCqHdWEcmAg7HNR/zw6u01G/kicl68eZXXOviTkIk5hmXDr/o2UcDYuQvAIGJDd74qKzl4Xz9980lkxwkMib44fk/2RiEDhEmGOcJMgsjUEmbBOWCGsEXn84n4DYCewx+p/CvMAAAAASUVORK5CYII=" },
      { id: "83be1418-185c-45ae-84ff-d8c439b153ec", name: "Eber", last_name: "Mithan", username: "eber", email: "eber@gmail.com", birthday: "10/10/1975", country: "Wenjiao", password: "eber", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJYSURBVDjLY/j//z8DJRhMmJQd+x89/W4IRQbY1x5L8590dzmy5PuIqC4gfvA+PPIyEMfhNqD06H+L9gfG9p33/jr23OMEiX30DTj8yT/oFxCf+hAYfBeIfwPxIyBWwjSg5Mh/tYZHzDr1D34aND7Y9tXOsf2Lg/O/z85uNjCFn908lT56eH985xXwzXvygwYUA4yLD/9Xcm+QlS572JWesP7XVyOL79/MLKci22Rc/6DXvPH+X8um+79t2u7/tOu4/w9ugFHxof8wha+1LP89NHT9iaxZIf/BCpWie7/Vi+/N/25kqvrN2Oz/suiO6QgDig6ADfgtJrX0p6TMb1u/Xd+5Eh9M4k16yCyQdH+HYOK9H6JJd+tgBv7U0j3wXVvvA9wAg8J9/6sNAvT/8gr++8Mn1MYQ8aCFIfzBf6bwB3+Zwx/8Ywu7H44e+j8VVX4hDMjf+/8/I6v/fya2OyghHHCn3GuRw3TvJTZnPJdYnXVbbA436Le49Aa4Afp5u///ZGAJ+c3AIg5T4DXT0stjpuULj1nmD9xmW6x1nWu2z2W+6RenBcbxIHmga6XgBujl7vw/R1TDAabZscNommOn0UeHLsNFDj2GPDBxh37DDrtJ+u8x0oFu9vb/liU6khal2jPNS3UfAem3FmU6Gej+tqjX5rBo0rln1qI9GdWArG3/jTI0/Q0z1N3UAyxdgTQ4NQpreMjCFAqpOoHZRvnqUhpROhmmxRo8cAO0M7f8187Y/F8rYxMQb/yvlbYBiNf/1wTh1HX/NUA4ZS0Ur/mvkbwajOEGUIIBf5BxjDvwFIUAAAAASUVORK5CYII=" },
      { id: "f40a730c-5fd7-4ed0-94b3-1f7ac26bf3a2", name: "Emma", last_name: "Blaik", username: "emma", email: "emma@gmail.com", birthday: "02/10/1987", country: "Zamboanga", password: "emma", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG5SURBVBgZpcG7b41xAMfhz/v2SJ1qI2nVedXtD0ClsdpIdDARBlKRaEIMLP4OCZNYJGIQl0EQiYnJytSRRA8nLnGrSy+/z1dHObH1eapLL86FVUlIQgyX91+v+I+zT2aiQcUSVGpWdQa3sL29kxhMmovPZ0Ofs09momkQOu2GzlAHi9RJSEJnsGFrewct1vU09LOIxd6m9jhbh7cxULVQqWPo/X7Pm4U3DFcb2L1xkij9imFq8z5GWiN0v3d5/fk1pUhtQimlefezy2CrTZUKS+hnkQTWt4bofuuiNhapknDh2ZnEoEElhmvTNyv+cere8ahosIjKnZkHVZWEtahZo5o1qlmjFqtmH52MBouoaLh17G7FP47cOJwYLKJB5fH5p1U9++hkLDYDGWDX2B4mx6ewSD9LmJzYy66J3ahomumrB1NbRNMbWz/Ot99fWV5ZwiL9VBbLEl9+fWHT8DhV6KnUFmmGJhgdHOXH4gKv3r9EpZ9F5ubnWFpeobOxw+jwGDG0ivJn+Q/zi/N8XPhAKTZqjz4aiovN/Ke3PUshBhOqE7ePRsUiGlTun35Y8R+HrhxIDCbEkIS/gKBKja+GF3wAAAAASUVORK5CYII=" },
      { id: "b94b683b-614e-4bf2-9be6-968ca6dbde0b", name: "Leyder", last_name: "Combes", username: "leyder", email: "leyder@gmail.com", birthday: "10/09/1987", country: "Vigan", password: "leyder", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGKSURBVCjPPVFNSwJRFH1SPyR00V+xIqJVREIEUm6VFm1ahFvLiiI/oE1QRlQgUtgHlKhp41dlokVFpKmjo41M69MZlbi8d+Gec8897z4BoYcwREdj67fJsHqunkp728cjvToR/UoYs66I9og6OvjEA0o41FzeXWOfkB+6CZQIqajhGz/MRWQRh+dg3USCMNyvvbG3xVDQ5JFRJkXFNZZ8JNyZw1qbfTrUZuhwk1mihktbGRNxd45QqxvtroqMBip4pZcYHB4Rkhr44oh2H9bzJ/srHBLEYkoE1RZF5X8PLZ4qnmm3SqsOlQSpC1X6KhU+ssacwxlvW0ccSWnObOCdkK7ygUcSmijQ5BNsKeH1FMnOkK2wWOCtII9LDlCxBeuWCJh3tTynKVRJItG1meUOyqTMaTMT3KTTdwUNUYa+i3uCMvcSgR+2VTFAwo5xcz/EV6dps06VKLu/EMDUyeRw/7NcRoffqcXp+4I2X+DB9K/VbTH9/6Yey6MLfrtkV62d2cz8hmVcDPbqfy6NlFRFHkA7AAAAAElFTkSuQmCC" },
      { id: "60e2b3f6-acb4-47af-b4e8-7846899e6381", name: "Pablo", last_name: "Dollman", username: "pablo", email: "pablo@gmail.com", birthday: "09/12/1993", country: "Stockholm", password: "pablo", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLpZPNS9RRFIaf+5tx/JqxUZGKQtEkyJBKw1ZhG0mSFkW1aVW7Wgpusv4CoX20KIgIKowgZSgwrIVghFQbM2swQRM/xmx05jf33nNaBJNWtKizPJzzcDjv+xpV5X8q+mvDPTdxVXpV6BahQxVUGBchpcL1xEnNbp43my9wz02nCrdMfV+jSXagsRpQj+aW8JkJwg8DaREuVJ/S0d8AbsSc0mTnYLDjPFqxDb8xiYTLqMuDKSMoa8bYgPDzA8KF0dN15/RREWBHTI0qM5HWe3EJ1vD5NNhviAtRn/8BEcWU1hMpbeXr2MWsCA07z+tKAKBCb9DQH9cYSJgGt87I4yWQAvgCL56B2Cxu7R0+/EjFvv64eHoBAgARekz1ESSfRl0OFcuxE+WoWNRbjnZmUQlRm8Wtviaa3It4eooqiNBCaRWSW2X6bTWYBJhf5FFF3Qq7a54CId7TWASokFOXj+EdNQ3tVNTuwQSRrfviWV94g64NgSoiRH5e4EljcwchRmU8R2J7M0G0ZAvA2xC/PIwJKhAfxYZMb/7BkF2awMTqCcJR7MYcsNmhil37CMv3iVYdILc0gy0wVJQxM2jqRPgUP3InLvY9bn2GSLKHkmQbqCdcfElh9iaR8l2YquPMPLmUdZamQ1d0sWikxfvmTLSu60FZ/WmIfMNlXuFzc6jLY6IJIomDeJrITA6TmUqdbevXh79Zef6u6RLPjcqWvsZY7X6CkgDE4ULP+vwUX8YG0s5yuf2qpv6YBYDZ2yYunj4Rur2nwxXAWcadJeUsA4ev/SVM/1LfAVOtXW4xpbWpAAAAAElFTkSuQmCC" },
      { id: "1c95f17c-71c6-4f84-b9fa-6ea6541dd78d", name: "Cherey", last_name: "Cottie", username: "ccottie4", email: "ccottie4@scientificamerican.com", birthday: "02/04/1999", country: "Sanchahe", password: "1caZy9B", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGcSURBVDjLxVM7SEJRGP5vmVfpAWGFERJUONQWLtEQOUQRbUK09IDW1mp1KKPBsdGlWqKIqGiLoq0aggqxraFARMpX95535xxCNLouDh04cM7//3yvwzGEEFDPaoA6l6vyEj3MaDmcc0CMX23NdY9X9iPxlxijsHK8GmxxUMAh1O+BAb8bEKZVnZntVMyisFYiotnRgkU4UMaByC0Hy/XpzWQ80GGuTwy1GUULO1tQrIQJQBLIsriuTW4kE71d3qWg3wNM9gqIOYeoWDHlGuALYQhHn/cCPnNpsMeEjyIBW9bzP8B/KlCsSAJ4TQNyiI0M97WaPe1NkM4TyJco+FpcQC3irECxYsVuM/iyaBFTplltzHU+6sx/KagCKCDlX0A6R5TXp5O77NHl4wd43QYYoOwJEAg7A6iEEZHsMijpVbzuhCLPqdzBzcMnNHsadT7CZrUUMB2gjVnZ6/v+6GzqMbt7e5/V+fBaIaqEbfUKEqByMH0enu8cu+AE0QVBqDOAYk2cvUmfUiqrHsxcTy36QqcE3K7lyrrx77/xG/TSBY2ALCinAAAAAElFTkSuQmCC" },
      { id: "bd2cd754-6bb5-4128-baf5-289aed832f8b", name: "Markos", last_name: "Roylance", username: "mroylance5", email: "mroylance5@ucsd.edu", birthday: "10/07/1991", country: "Kijini", password: "T58O2in", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAB/SURBVCjPpVFBDkBADJyKJ3mEk1d4goPPeYDgN2QtidFdFidZ0UnbZDszbbJCvEeCv4TUlVr3EKvCKmYYhau9AMIYh4oLFq8N6lYCIc6h5PzYbLyTVc8p+oaCQWu81mL8eEPzYNEnsWnP5SQA2fnsBkcSw+1AdJfqGN4hv39zB9EXSdykB4lxAAAAAElFTkSuQmCC" },
      { id: "5c2079e8-681f-453d-a2cd-e42ba3c1700a", name: "Hewet", last_name: "Coneybeer", username: "hconeybeer6", email: "hconeybeer6@google.it", birthday: "11/03/1951", country: "Wangtuan", password: "9TrLMLfgIZ", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI2SURBVDjLpVNNaBNBFP42aZNqXEw1iv0xFUpBLWmrF0v1IpKiKOohBwUvhYDgz0G8eIugYBBFD+JBpV49ekqpHoQklGBpzNb0UIwkoFarIvnT5m9mfDPJhlJTEVx4vN3Z9/28eTOaEAL/87StXYjH409rtdq5arXaRhmUVVQqFZmf+Xy+sy0JDMPYTIAnTqfTZ7dvRJlA4BzKH7ns7HRienrqDH39SZBIJI5KsMvl6nE4HEhnPkGqcy7ABSciAUZk5XK5dQtUPOV2u9XCykoJVQK/NeaIgDfDO35MtdGSQPZos9mQz+fryoxh7+CIUhcNdbnZ6zqQzIxAskgORVo3ErOUmVKX/7qOn/q7g/peCVUsCQY9+5W66UKsswcW04FJoEikMqv3/k1PYzJ7H3xVXcsWmuAG0FSfXHyMn4UaEpkwcttSOH/vtCj8yhWyxR+3Q7eMm4pAWjNPpATxhmVOa1e2XsciZpEpxeA9fBC9WwbwauG5HktGboxe6nY2W5BTsFqtdWXGV41QIPk5jJHdw2AWhuEuL5hWxahnTEIvWhoOXkciERSLRei6jo4NdjqBmiJi5OJ7YRnt2iac3HNZubx65BH6tw/J1w5F4Pf7D6RSqROhUGguGg3DbtOwq68XbncP+nZ2I1/MYmFpBsGXE4og+GIC77/Oy9eStvY2BgKBcRrrHQqPeZk+8CTa+5cxNnQIAzv24d2XN5iZj+JjOndX+9frTBsWpHSBQqcoUDyMPVi69hviC4VQKCIpUgAAAABJRU5ErkJggg==" },
      { id: "fbcc828f-e372-4cf9-9851-11bfd4d037bb", name: "Jaclyn", last_name: "Bourgaize", username: "jbourgaize7", email: "jbourgaize7@ftc.gov", birthday: "07/01/1973", country: "Atbasar", password: "AFpY8KQgRc", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACzSURBVDjL7dI9C0FxHMXx8zruG2SSUjKgXwklw2WxSB4yGC2iDFyDpwj1T1LK00jq+hduOt6AwU02w1k/deoLkvhm+APvAVRpoEpBxVEoaoX8SZDbG24AkcWTrZ3D+ubByPBCmEv5HCjfVXPrMNq/0WdpZuaaSI3U50DhomrrG/2WpqdzZWJiE7G2CyB3lPDgTHOmGR/bDHUPRLDk4kJ2ZSA9FSR7CtJQCOQF3rjxL/FHwAu8X+2ABKJChQAAAABJRU5ErkJggg==" },
      { id: "010f8b83-3ffa-437b-b4d1-c4120a6c92c5", name: "Carlye", last_name: "Lelande", username: "clelande8", email: "clelande8@craigslist.org", birthday: "08/07/1998", country: "Judaydah", password: "JEJLdCpvW9M7", wallet: "", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFhSURBVDjLpZMxbtZAEIW/N/bP7w4aSiQuQEODEFdIAVI6KFJwgeQenAEBFQVU1CBOkAsgroDSRMof77wUa68tK5GQstqVd1fz3rw345Vt7jN6gM8/zj9k6u3lIYer8ZaoTY5dD8OOj+9fPz/tAdJ6d/TqyeNhGCR1eMIkAMIGez6bMl7z/eefE6ASXF7lfr8f9OX3P0oxY2b9lmQspkznkibTnB0/paQEEACHESI6hKhTTa7mrepegsxNDWhyadAaLIQJCQssiAA3kxuCBpKRRMhkCBlCVW8a1p1rBPYCXjKKTrNRkOvCuougkkTULA4tHRQ4IVb1aQSeCJbMJlZgTdlTqsRwt4LqddUFJms2YWPfpsBugRFTRWffEkojs4CnH6sRaLoNQbImEWlXZV7L3xRx2OmCvH745sUj0Ozd89wMMY4H+k5uBA96ff326+/LQ/Gz/3mcfQe74FNt7T2f8w1Fi68/h3owMgAAAABJRU5ErkJggg==" }
    ]
    await User.bulkCreate(users);

    const contracts = [
      {
        id: "250bbbc2-8d8c-4f28-a96c-d70418d6aee4",
        wallet1: "6d6e55fa-7aa7-4b35-8c1d-b772c02572bb",
        wallet2: "3b09a6f3-a61a-48af-9f84-d2f9f8167a91",
        status: "pending",
        conditions: {
          name: "mally Poreless Perfection Glowing Foundation Tan",
          shortdescription: "Supplement Left Lacrimal Duct with Nonaut Sub, Endo",
          longdescription: "Other repair of laceration of eyelid, partial-thickness",
          amount: "$5.68",
          coin: "Yuan Renminbi",
          condition: {
            c1: "mally Poreless Perfection Glowing Foundation Tan",
            c2: "Mawhinney"
          }
        }
      },
      {
        id: "33a91796-6f7a-49aa-a4d8-ecd37adcc736",
        wallet1: "7047c56d-1c54-4a27-bc32-09ed7039dd0e",
        wallet2: "0312a9d4-40d9-40b4-9425-7da178f22f2b",
        status: "pending",
        conditions: {
          name: "Suboxone",
          shortdescription: "Excision of Right Thorax Muscle, Perc Endo Approach",
          longdescription: "Repair of current obstetric laceration of corpus uteri",
          amount: "$1.14",
          coin: "Rial",
          condition: {
            c1: "Suboxone",
            c2: "Dumbarton"
          }
        }
      },
      {
        id: "24d59ef0-c136-49de-b43c-0ef76734957c",
        wallet1: "86f0c320-74d0-42d6-afa1-1c66c01b2a75",
        wallet2: "c564d34d-5d85-4390-8a4e-10a41ae73379",
        status: "done",
        conditions: {
          name: "Simvastatin",
          shortdescription: "Repair Right External Ear, Open Approach",
          longdescription: "Revision of ureterointestinal anastomosis",
          amount: "$3.65",
          coin: "Dollar",
          condition: {
            c1: "Simvastatin",
            c2: "Grace"
          }
        }
      },
      {
        id: "c7ca0a77-acb7-4934-a586-c47d86032373",
        wallet1: "16af5241-cef6-4e2b-a244-83bd6dfe70f1",
        wallet2: "1c471904-3f51-4051-b02a-fa4fc7fb5884",
        status: "pending",
        conditions: {
          name: "Olanzapine",
          shortdescription: "Supplement Head with Synthetic Substitute, Open Approach",
          longdescription: "Other operations on cornea",
          amount: "$5.66",
          coin: "Euro",
          condition: {
            c1: "Olanzapine",
            c2: "Fettiplace"
          }
        }
      },
      {
        id: "7b75d9c9-b089-4e4d-a740-bf89c5c9f329",
        wallet1: "35e1d828-0379-4147-a39f-e2f4c4f2fe36",
        wallet2: "d60e98e7-cb53-4b53-9f8c-e873c153059a",
        status: "pending",
        conditions: {
          name: "Hydrocortisone",
          shortdescription: "Bypass L Fallopian Tube to L Fallop w Nonaut Sub, Perc Endo",
          longdescription: "Other arthrotomy, other specified sites",
          amount: "$8.06",
          coin: "Zloty",
          condition: {
            c1: "Hydrocortisone",
            c2: "Lyford"
          }
        }
      },
      {
        id: "79961e33-5065-46fd-ac6b-d948d24f41f9",
        wallet1: "d862e709-2a91-43d7-8c61-7e60a1db253f",
        wallet2: "b79e9517-ce8c-4f3a-8c9e-3c2f57046bfd",
        status: "done",
        conditions: {
          name: "NEXICLEAR ACNE TREATMENT",
          shortdescription: "Dilation of R Ext Carotid with 3 Drug-elut, Perc Approach",
          longdescription: "Sphenoidectomy",
          amount: "$6.98",
          coin: "Real",
          condition: {
            c1: "NEXICLEAR ACNE TREATMENT",
            c2: "Mathon"
          }
        }
      },
      {
        id: "28dbbfb7-9645-4ace-a05a-b30cc299b652",
        wallet1: "1d06325c-91a3-4a83-aea3-2619832815ec",
        wallet2: "ca79e1de-7c32-4d18-bfec-6f59ddff156c",
        status: "done",
        conditions: {
          name: "Simcor",
          shortdescription: "Destruction of Anus, Open Approach",
          longdescription: "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, cell block and Papanicolaou smear",
          amount: "$1.76",
          coin: "Peso",
          condition: {
            c1: "Simcor",
            c2: "Vicioso"
          }
        }
      },
      {
        id: "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5",
        wallet1: "2d7554fc-f20e-4527-9957-fcad26fe92ba",
        wallet2: "1c00f51b-87b2-4831-8c4d-49b6ea7631a1",
        status: "pending",
        conditions: {
          name: "Rx Act all day pain relief",
          shortdescription: "Replacement of L Post Tib Art with Nonaut Sub, Open Approach",
          longdescription: "Correction of ureteropelvic junction",
          amount: "$5.56",
          coin: "Peso",
          condition: {
            c1: "Rx Act all day pain relief",
            c2: "Duffer"
          }
        }
      },
      {
        id: "a80ed501-693f-42f4-a528-9bf1f9c1fabb",
        wallet1: "ff0d4c55-0f54-4c91-8ef0-7e4fb1ca787b",
        wallet2: "a75e4fe2-ac54-465b-a450-2fb00cdea362",
        status: "pending",
        conditions: {
          name: "Isovue-M",
          shortdescription: "Transplantation of Nervous System into POC, Perc Approach",
          longdescription: "Lysis of other anterior synechiae",
          amount: "$8.77",
          coin: "Real",
          condition: {
            c1: "Isovue-M",
            c2: "Joselin"
          }
        }
      },
      {
        id: "592ffd96-dd02-4a33-b479-e2235f15ee6a",
        wallet1: "d701d5cc-bc3f-4a6b-a85e-400567015bfd",
        wallet2: "f35ee685-3549-4349-834c-ccb343b4f83c",
        status: "pending",
        conditions: {
          name: "Metformin Hydrochloride",
          shortdescription: "Isotope Administration to Whole Body using Strontium 90",
          longdescription: "Closed reduction of separated epiphysis, other specified bone",
          amount: "$5.60",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Metformin Hydrochloride",
            c2: "Scudder"
          }
        }
      },
    ]
    await Contract.bulkCreate(contracts);

    let idUser = await User.findByPk("883ba5c8-52d4-458f-ab8f-69f35ad50739");
    await idUser.setContracts(["250bbbc2-8d8c-4f28-a96c-d70418d6aee4", "33a91796-6f7a-49aa-a4d8-ecd37adcc736"]);

    idUser = await User.findByPk("83be1418-185c-45ae-84ff-d8c439b153ec");
    await idUser.setContracts(["250bbbc2-8d8c-4f28-a96c-d70418d6aee4", "33a91796-6f7a-49aa-a4d8-ecd37adcc736", "24d59ef0-c136-49de-b43c-0ef76734957c"]);

    idUser = await User.findByPk("f40a730c-5fd7-4ed0-94b3-1f7ac26bf3a2");
    await idUser.setContracts(["c7ca0a77-acb7-4934-a586-c47d86032373", "33a91796-6f7a-49aa-a4d8-ecd37adcc736", "28dbbfb7-9645-4ace-a05a-b30cc299b652", "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5", "a80ed501-693f-42f4-a528-9bf1f9c1fabb"]);

    idUser = await User.findByPk("b94b683b-614e-4bf2-9be6-968ca6dbde0b");
    await idUser.setContracts(["28dbbfb7-9645-4ace-a05a-b30cc299b652", "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5"]);

    idUser = await User.findByPk("60e2b3f6-acb4-47af-b4e8-7846899e6381");
    await idUser.setContracts(["28dbbfb7-9645-4ace-a05a-b30cc299b652", "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5", "a80ed501-693f-42f4-a528-9bf1f9c1fabb", "592ffd96-dd02-4a33-b479-e2235f15ee6a"]);

    idUser = await User.findByPk("1c95f17c-71c6-4f84-b9fa-6ea6541dd78d");
    await idUser.setContracts(["33a91796-6f7a-49aa-a4d8-ecd37adcc736", "24d59ef0-c136-49de-b43c-0ef76734957c", "c7ca0a77-acb7-4934-a586-c47d86032373"]);

    idUser = await User.findByPk("bd2cd754-6bb5-4128-baf5-289aed832f8b");
    await idUser.setContracts(["250bbbc2-8d8c-4f28-a96c-d70418d6aee4"]);

    idUser= await User.findByPk("5c2079e8-681f-453d-a2cd-e42ba3c1700a");
    await idUser.setContracts(["592ffd96-dd02-4a33-b479-e2235f15ee6a", "79961e33-5065-46fd-ac6b-d948d24f41f9", "24d59ef0-c136-49de-b43c-0ef76734957c"]);

    // idUser = await User.findByPk("fbcc828f-e372-4cf9-9851-11bfd4d037bb");
    // await idUser.setContracts([]);

    // idUser = await User.findByPk("010f8b83-3ffa-437b-b4d1-c4120a6c92c5");
    // await idUser.setContracts([]);
  } catch (error) {
    console.log(error)
  }

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
