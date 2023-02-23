import PropTypes from "prop-types";
import {StyledStatistics,StyledStat} from '../styled/Statistics.styled'
export function Statistics({ title, stats }) {

    return (
        <StyledStatistics>  {
            title && (<h2>{title}</h2>)
        }
            {stats.length > 0 && (
                   <ul>
                {stats.map(stat =>  (
                    <StyledStat key={stat.id} color={getRandomHexColor()}>
                            <span >{stat.label}</span>
                            <span >{stat.percentage}%</span>
                        </StyledStat>
                    )
                )}
            </ul>
            )
            }
         
        </StyledStatistics>
    );

    
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

Statistics.propTypes = {

    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }
    ).isRequired).isRequired


}