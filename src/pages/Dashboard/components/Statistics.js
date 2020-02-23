import React from 'react'
import { Row, Col, Card } from 'antd'

const styles = {
    chartCardTitle: {
        height: 22,
        color: 'rgba(0,0,0,.45)',
        fontSize: 14,
        lineHeight: '22px',
    },
    chartCardTotal: {
        height: 38,
        marginTop: 4,
        marginBottom: 0,
        overflow: 'hidden',
        color: 'rgba(0,0,0,.85)',
        fontSize: 30,
        lineHeight: '38px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
    },
    chartCardFooter: {
        marginTop: 8,
        paddingTop: 9,
        borderTop: '1px solid #e8e8e8'
    },
    row: {
        marginLeft: -12,
        marginRight: -12
    },
    col: {
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 24
    }
}

const Dashboard = () => {
    return (
        <Row style={styles.row}>
            <Col xs={12} sm={12} md={12} lg={12} xl={6} style={styles.col}>
                <Card
                    bordered={true}
                    bodyStyle={{
                        padding: '20px',
                    }}
                >
                    <div style={styles.chartCardTitle}>
                        <span>Total Sales</span>
                    </div>
                    <div style={styles.chartCardTotal}>
                        <span>¥ 126,560</span>
                    </div>
                    <div style={styles.chartCardFooter}>
                        <span>Daily Sales</span>
                        <span style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>￥12,423</span>
                    </div>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6} style={styles.col}>
                <Card
                    bordered={true}
                    bodyStyle={{
                        padding: '20px',
                    }}
                >
                    <div style={styles.chartCardTitle}>
                        <span>Visits</span>
                    </div>
                    <div style={styles.chartCardTotal}>
                        <span>8,560</span>
                    </div>
                    <div style={styles.chartCardFooter}>
                        <span>Daily Visits</span>
                        <span style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>1,234</span>
                    </div>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6} style={styles.col}>
                <Card
                    bordered={true}
                    bodyStyle={{
                        padding: '20px',
                    }}
                >
                    <div style={styles.chartCardTitle}>
                        <span>Payments</span>
                    </div>
                    <div style={styles.chartCardTotal}>
                        <span>6,560</span>
                    </div>
                    <div style={styles.chartCardFooter}>
                        <span>Conversion Rate</span>
                        <span style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>60%</span>
                    </div>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6} style={styles.col}>
                <Card
                    bordered={true}
                    bodyStyle={{
                        padding: '20px',
                    }}
                >
                    <div style={styles.chartCardTitle}>
                        <span>Operational Effect</span>
                    </div>
                    <div style={styles.chartCardTotal}>
                        <span>70%</span>
                    </div>
                    <div style={styles.chartCardFooter}>
                        <span>WoW Change</span>
                        <span style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>12%</span>
                    </div>
                </Card>
            </Col>
        </Row>
    );
}

export default Dashboard;
