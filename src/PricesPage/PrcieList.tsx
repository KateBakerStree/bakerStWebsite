import * as React from 'react';
import './PriceTableStyleSheet.css'

const tableStyle = {
    'border-collapse': 'collapse',
    'table-layout': 'fixed',
    'width': '387pt'
};

export default class PrcieList extends React.Component {
    
    render() {
        return (
            <div align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="517" style={tableStyle}>
                <colgroup>
                    <col width="242" ></col>
                    <col width="275" ></col>
                </colgroup>
                <tbody>
                    <tr height="19" >
                  <td height="19" class="xl656408" width="242" >Service</td>
                  <td class="xl666408" width="275" >Price</td>
                 </tr>
                 <tr height="19" >
                  <td rowspan="3" height="57" class="xl676408"><span lang="en-GB">Chair Massage</span></td>
                  <td class="xl686408"><span lang="en-GB">£15/10 Minutes</span></td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl706408" >£20/15 Minutes</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl686408" >£30/20 Minutes</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl696408" >&nbsp;</td>
                  <td class="xl706408"><span lang="zh-CN" >&nbsp;</span></td>
                 </tr>
                 <tr height="19" >
                  <td rowspan="3" height="57" class="xl676408"><span lang="en-GB">Relaxing Massage</span></td>
                  <td class="xl686408"><span lang="en-GB">£35/30 Minutes</span></td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl706408" >£50/45 Minutes</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl686408" >£55/60 Minutes</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl696408" >&nbsp;</td>
                  <td class="xl706408"><span lang="zh-CN" >&nbsp;</span></td>
                 </tr>
                 <tr height="19" >
                  <td rowspan="3" height="57" class="xl676408"><span lang="en-GB">Deep Tissue Massage &amp; Reflexology</span></td>
                  <td class="xl686408"><span lang="en-GB">£40/30 Minutes</span></td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl706408" >£55/45 Minutes</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl686408" >£70/60 Minutes</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl696408" >&nbsp;</td>
                  <td class="xl706408">&nbsp;</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl676408" ><span lang="en-GB">Acupuncture,
                  Cupping &amp; M15<span >&nbsp;&nbsp;</span></span></td>
                  <td class="xl686408"><span lang="en-GB">£100.00</span></td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl696408" ><span lang="en-GB">buy<span >&nbsp; </span>6<span >&nbsp;
                  </span>get 1 free</span></td>
                  <td class="xl706408">&nbsp;</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl676408" >buy 10 get 2 free</td>
                  <td class="xl686408">&nbsp;</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl696408" >&nbsp;</td>
                  <td class="xl706408">&nbsp;</td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl676408" ><span lang="en-GB">Ear
                  Candle</span></td>
                  <td class="xl686408"><span lang="en-GB">£40.00</span></td>
                 </tr>
                 <tr height="19" >
                  <td height="19" class="xl636408" ><span lang="en-GB">Herbal
                  Medicine</span></td>
                  <td class="xl646408"><span lang="en-GB">£15<span >&nbsp;&nbsp;
                  </span>a day</span></td>
                 </tr>
                 <tr height="0" >
                  <td width="242" ></td>
                  <td width="275" ></td>
                 </tr>
                    </tbody></table>
            </div>
        );
    }
}