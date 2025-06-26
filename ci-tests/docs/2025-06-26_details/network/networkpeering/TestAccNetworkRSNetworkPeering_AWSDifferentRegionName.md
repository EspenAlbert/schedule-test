# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 3 minutes
```
2025-06-20T00:41:01.7704468Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-20T00:41:01.7708372Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-20T00:41:01.7717901Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (218.15s)
```
### 2025-06-21
#### PASS 3 minutes
```
2025-06-21T00:41:03.3969345Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-21T00:41:03.3971524Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-21T00:41:03.3974439Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (220.68s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:44:14.8824436Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-22T00:44:14.8826714Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-22T00:44:14.8853045Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-22T00:44:14.8854142Z     resource_network_peering_test.go:180: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:44:14.8855043Z         
2025-06-22T00:44:14.8855750Z         Error: error when getting project properties after create
2025-06-22T00:44:14.8856357Z         
2025-06-22T00:44:14.8856935Z           with mongodbatlas_project.my_project,
2025-06-22T00:44:14.8858131Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-06-22T00:44:14.8859193Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-06-22T00:44:14.8859750Z         
2025-06-22T00:44:14.8860576Z         error getting project (68574ef0af7a0954e84adba5): error getting project's
2025-06-22T00:44:14.8861418Z         limits (68574ef0af7a0954e84adba5):
2025-06-22T00:44:14.8862455Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef0af7a0954e84adba5/limits
2025-06-22T00:44:14.8863669Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:14.8864880Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:14.8865598Z         BadRequestDetail: 
2025-06-22T00:44:14.8866288Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (34.32s)
```
### 2025-06-23
#### PASS 3 minutes
```
2025-06-23T00:43:34.5895837Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-23T00:43:34.5897946Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-23T00:43:34.5900953Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (219.34s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:41:41.0039335Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-24T00:41:41.0042796Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-24T00:41:41.0046676Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (234.16s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:42:01.3163445Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-25T00:42:01.3165502Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-25T00:42:01.3167716Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (212.92s)
```
### 2025-06-26
#### PASS 3 minutes
```
2025-06-26T00:41:55.7517891Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-26T00:41:55.7522004Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-26T00:41:55.7531713Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (224.69s)
```