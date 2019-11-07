const test = require('./scripts/test.js');
const fs = require('fs');

var parseString = require('xml2js').parseString;

const xml = `<?xml version="1.0" encoding="utf-8"?>
<Siri version="1.3" xmlns="http://www.siri.org.uk/siri">
    <ResponseTimestamp>2019-11-06T18:59:10.8846936-07:00</ResponseTimestamp>
    <VehicleMonitoringDelivery version="1.3">
        <ResponseTimestamp>2019-11-06T18:59:10.8846936-07:00</ResponseTimestamp>
        <ValidUntil>2019-11-06T18:59:20.8846936-07:00</ValidUntil>
        <VehicleActivity>
            <RecordedAtTime>2019-11-06T18:59:10.8846936-07:00</RecordedAtTime>
            <MonitoredVehicleJourney>
                <LineRef>2</LineRef>
                <DirectionRef>TO U HOSPITAL</DirectionRef>
                <FramedVehicleJourneyRef>
                    <DataFrameRef>2019-11-06T00:00:00-07:00</DataFrameRef>
                    <DatedVehicleJourneyRef>4049773</DatedVehicleJourneyRef>
                </FramedVehicleJourneyRef>
                <PublishedLineName>200 SOUTH</PublishedLineName>
                <OriginRef>125332</OriginRef>
                <DestinationRef>198445</DestinationRef>
                <Monitored>True</Monitored>
                <VehicleLocation>
                    <Longitude>-111.91</Longitude>
                    <Latitude>40.76462</Latitude>
                </VehicleLocation>
                <ProgressRate>1</ProgressRate>
                <CourseOfJourneyRef>26159</CourseOfJourneyRef>
                <VehicleRef>13001</VehicleRef>
                <Extensions>
                    <LastGPSFix>2019-11-06T18:58:54.99</LastGPSFix>
                    <Scheduled>False</Scheduled>
                    <Bearing>153.2</Bearing>
                    <Speed>0</Speed>
                    <DestinationName>Eastbound to University Hospital; westbound to Salt Lake Central Station</DestinationName>
                </Extensions>
            </MonitoredVehicleJourney>
            <MonitoredVehicleJourney>
                <LineRef>2</LineRef>
                <DirectionRef>TO U HOSPITAL</DirectionRef>
                <FramedVehicleJourneyRef>
                    <DataFrameRef>2019-11-06T00:00:00-07:00</DataFrameRef>
                    <DatedVehicleJourneyRef>4049786</DatedVehicleJourneyRef>
                </FramedVehicleJourneyRef>
                <PublishedLineName>200 SOUTH</PublishedLineName>
                <OriginRef>125332</OriginRef>
                <DestinationRef>198445</DestinationRef>
                <Monitored>True</Monitored>
                <VehicleLocation>
                    <Longitude>-111.84739</Longitude>
                    <Latitude>40.76758</Latitude>
                </VehicleLocation>
                <ProgressRate>1</ProgressRate>
                <CourseOfJourneyRef>26258</CourseOfJourneyRef>
                <VehicleRef>13037</VehicleRef>
                <MonitoredCall>
                    <StopPointRef>125407</StopPointRef>
                    <VisitNumber>1</VisitNumber>
                    <VehicleAtStop>false</VehicleAtStop>
                </MonitoredCall>
                <OnwardCalls>
                    <OnwardCall>
                        <StopPointRef>13788</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 400 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13789</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13791</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / State St (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13792</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 200 W (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>14482</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1000 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>14483</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 W (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>21168</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>Salt Lake Central Station (Bay A)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>21817</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / Rio Grande St (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>22187</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U President's Circle (SB, Stop A)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24344</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U Kennecott Building (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24458</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 200 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24473</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / West Temple (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24492</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1300 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24511</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1100 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24562</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 700 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24563</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 600 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24565</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 500 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24869</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 900 E (WB)</StopPointName>
                    </OnwardCall>
                </OnwardCalls>
                <Extensions>
                    <LastGPSFix>2019-11-06T18:59:02.867</LastGPSFix>
                    <Scheduled>False</Scheduled>
                    <Bearing>180.8</Bearing>
                    <Speed>0.356748</Speed>
                    <DestinationName>Eastbound to University Hospital; westbound to Salt Lake Central Station</DestinationName>
                </Extensions>
            </MonitoredVehicleJourney>
            <MonitoredVehicleJourney>
                <LineRef>2</LineRef>
                <DirectionRef>TO U HOSPITAL</DirectionRef>
                <FramedVehicleJourneyRef>
                    <DataFrameRef>2019-11-06T00:00:00-07:00</DataFrameRef>
                    <DatedVehicleJourneyRef>4049735</DatedVehicleJourneyRef>
                </FramedVehicleJourneyRef>
                <PublishedLineName>200 SOUTH</PublishedLineName>
                <OriginRef>125332</OriginRef>
                <DestinationRef>198445</DestinationRef>
                <Monitored>True</Monitored>
                <VehicleLocation>
                    <Longitude>-111.90985</Longitude>
                    <Latitude>40.76417</Latitude>
                </VehicleLocation>
                <ProgressRate>1</ProgressRate>
                <CourseOfJourneyRef>26253</CourseOfJourneyRef>
                <VehicleRef>13041</VehicleRef>
                <MonitoredCall>
                    <StopPointRef>198480</StopPointRef>
                    <VisitNumber>1</VisitNumber>
                    <VehicleAtStop>false</VehicleAtStop>
                </MonitoredCall>
                <OnwardCalls>
                    <OnwardCall>
                        <StopPointRef>24471</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 800 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24493</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 500 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24494</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 600 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24495</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 900 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24496</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1000 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>5479</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 W (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>5481</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S @ 121 W</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13105</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / Main St (EB) for Gallivan P</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>5482</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / State St (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13636</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 200 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13637</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24469</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 400 E (EB)</StopPointName>
                    </OnwardCall>
                </OnwardCalls>
                <Extensions>
                    <LastGPSFix>2019-11-06T18:59:04.273</LastGPSFix>
                    <Scheduled>False</Scheduled>
                    <Bearing>171.3</Bearing>
                    <Speed>0</Speed>
                    <DestinationName>Eastbound to University Hospital; westbound to Salt Lake Central Station</DestinationName>
                </Extensions>
            </MonitoredVehicleJourney>
            <MonitoredVehicleJourney>
                <LineRef>2</LineRef>
                <DirectionRef>TO U HOSPITAL</DirectionRef>
                <FramedVehicleJourneyRef>
                    <DataFrameRef>2019-11-06T00:00:00-07:00</DataFrameRef>
                    <DatedVehicleJourneyRef>4049748</DatedVehicleJourneyRef>
                </FramedVehicleJourneyRef>
                <PublishedLineName>200 SOUTH</PublishedLineName>
                <OriginRef>125332</OriginRef>
                <DestinationRef>198445</DestinationRef>
                <Monitored>True</Monitored>
                <VehicleLocation>
                    <Longitude>-111.90985</Longitude>
                    <Latitude>40.76462</Latitude>
                </VehicleLocation>
                <ProgressRate>1</ProgressRate>
                <CourseOfJourneyRef>62673</CourseOfJourneyRef>
                <VehicleRef>18010</VehicleRef>
                <MonitoredCall>
                    <StopPointRef>125407</StopPointRef>
                    <VisitNumber>1</VisitNumber>
                    <VehicleAtStop>false</VehicleAtStop>
                </MonitoredCall>
                <OnwardCalls>
                    <OnwardCall>
                        <StopPointRef>13792</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 200 W (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>14483</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 W (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>21817</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / Rio Grande St (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24473</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / West Temple (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13100</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>North Campus Dr / Federal Heights D</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24344</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U Kennecott Building (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>22187</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U President's Circle (SB, Stop A)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24511</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1100 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>14482</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1000 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24869</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 900 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24562</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 700 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>15195</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>North Campus Dr / Mario Capecchi Dr</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>1022</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>University Hospital</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24181</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U Kennecott Building (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24492</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1300 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24496</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1000 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24490</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1100 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24491</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1300 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>22188</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U President's Circle (NB, Stop B)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>5479</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 W (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>5481</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S @ 121 W</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13105</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / Main St (EB) for Gallivan P</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>5482</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / State St (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13636</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 200 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13637</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24469</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 400 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24493</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 500 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24494</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 600 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24470</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 700 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24471</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 800 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24495</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 900 E (EB)</StopPointName>
                    </OnwardCall>
                </OnwardCalls>
                <Extensions>
                    <LastGPSFix>2019-11-06T18:59:00.96</LastGPSFix>
                    <Scheduled>False</Scheduled>
                    <Bearing>195.5</Bearing>
                    <Speed>13.234200000000001</Speed>
                    <DestinationName>Eastbound to University Hospital; westbound to Salt Lake Central Station</DestinationName>
                </Extensions>
            </MonitoredVehicleJourney>
            <MonitoredVehicleJourney>
                <LineRef>2</LineRef>
                <DirectionRef>TO U HOSPITAL</DirectionRef>
                <FramedVehicleJourneyRef>
                    <DataFrameRef>2019-11-06T00:00:00-07:00</DataFrameRef>
                    <DatedVehicleJourneyRef>4049759</DatedVehicleJourneyRef>
                </FramedVehicleJourneyRef>
                <PublishedLineName>200 SOUTH</PublishedLineName>
                <OriginRef>125332</OriginRef>
                <DestinationRef>198445</DestinationRef>
                <Monitored>True</Monitored>
                <VehicleLocation>
                    <Longitude>-111.85231</Longitude>
                    <Latitude>40.76515</Latitude>
                </VehicleLocation>
                <ProgressRate>1</ProgressRate>
                <CourseOfJourneyRef>81092</CourseOfJourneyRef>
                <VehicleRef>18152</VehicleRef>
                <MonitoredCall>
                    <StopPointRef>118159</StopPointRef>
                    <VisitNumber>1</VisitNumber>
                    <VehicleAtStop>false</VehicleAtStop>
                </MonitoredCall>
                <OnwardCalls>
                    <OnwardCall>
                        <StopPointRef>13257</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / Main St (WB) for Gallivan P</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13788</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 400 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13789</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13791</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / State St (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>13792</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 200 W (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>14482</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1000 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>14483</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 300 W (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>15195</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>North Campus Dr / Mario Capecchi Dr</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>21817</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / Rio Grande St (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>22187</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U President's Circle (SB, Stop A)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>22188</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U President's Circle (NB, Stop B)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24181</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U Kennecott Building (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24344</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>U Kennecott Building (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24458</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 200 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24473</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / West Temple (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24491</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1300 E (EB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24492</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1300 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24511</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 1100 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24562</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 700 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24563</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 600 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24565</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 500 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>24869</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>200 S / 900 E (WB)</StopPointName>
                    </OnwardCall>
                    <OnwardCall>
                        <StopPointRef>1022</StopPointRef>
                        <VisitNumber>1</VisitNumber>
                        <StopPointName>University Hospital</StopPointName>
                    </OnwardCall>
                </OnwardCalls>
                <Extensions>
                    <LastGPSFix>2019-11-06T18:58:58.367</LastGPSFix>
                    <Scheduled>False</Scheduled>
                    <Bearing>10.7</Bearing>
                    <Speed>17.14692</Speed>
                    <DestinationName>Eastbound to University Hospital; westbound to Salt Lake Central Station</DestinationName>
                </Extensions>
            </MonitoredVehicleJourney>
        </VehicleActivity>
    </VehicleMonitoringDelivery>
</Siri>`;

parseString(xml, (err, result) => {
    if (err) {
        console.log(err);
    }
    var jsonText = JSON.stringify(result, null, 4);
    console.log(jsonText);
});
