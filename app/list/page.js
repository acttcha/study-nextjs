export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let 어레이 = [2,3,4]
    어레이.map((a, i)=>{
        console.log(a)
    })

    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
            상품.map((a, i)=>{
                return (
                    <div className="food" key={i}>
                        <img src={'/food' + i +'.png'} className="food-img"/>
                        <h4>{상품[i]} $40</h4>
                    </div>
                )
            })
        }
      </div>
    )
  }
    