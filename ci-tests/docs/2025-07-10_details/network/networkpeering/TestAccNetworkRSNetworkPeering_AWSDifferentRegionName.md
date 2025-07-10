# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa |  | 1.04s
[2025-06-05 00:54](#error-2025-06-05t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.01s
[2025-06-22 00:44](#error-2025-06-22t0044140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574ef0af7a0954e84adba5/limits | qa | flaky_500 | 34.03s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4077267b5775b682fe7/limits | qa | flaky_500 | 252.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 minutes
- 2025-04-13 PASS 3 minutes
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS 3 minutes
- 2025-04-16
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-04-17 PASS 3 minutes
- 2025-04-18 PASS 3 minutes
- 2025-04-19 PASS 3 minutes
- 2025-04-20 PASS 3 minutes
- 2025-04-21 PASS 3 minutes
- 2025-04-22 PASS 3 minutes
- 2025-04-23 PASS 3 minutes
- 2025-04-24 PASS 3 minutes
- 2025-04-25 PASS 3 minutes
- 2025-04-26 PASS 3 minutes
- 2025-04-27 PASS 3 minutes
- 2025-04-28 PASS 3 minutes
- 2025-04-29 PASS 3 minutes
- 2025-04-30
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-02 PASS 3 minutes
- 2025-05-03 PASS 3 minutes
- 2025-05-04 PASS 3 minutes
- 2025-05-05 PASS 3 minutes
- 2025-05-06 PASS 3 minutes
- 2025-05-07 PASS 3 minutes
- 2025-05-08 PASS 3 minutes
- 2025-05-09 PASS 3 minutes
- 2025-05-10 PASS 3 minutes
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8730853Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-05-11T00:29:57.8732647Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-05-11T00:29:57.8743185Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-05-11T00:29:57.8743833Z     resource_network_peering_test.go:180: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:57.8744296Z         
2025-05-11T00:29:57.8744750Z         Error: error creating project: test-acc-tf-p-2921407581892946977
2025-05-11T00:29:57.8745335Z         
2025-05-11T00:29:57.8745714Z           with mongodbatlas_project.my_project,
2025-05-11T00:29:57.8746381Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-05-11T00:29:57.8747002Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-05-11T00:29:57.8747346Z         
2025-05-11T00:29:57.8747842Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8748279Z         type
2025-05-11T00:29:57.8748658Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (1.36s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-14 PASS 3 minutes
- 2025-05-15 PASS 3 minutes
- 2025-05-16 PASS 3 minutes
- 2025-05-17 PASS 3 minutes
- 2025-05-18 PASS 3 minutes
- 2025-05-19 PASS 3 minutes
- 2025-05-20 PASS 3 minutes
- 2025-05-21 PASS 3 minutes
- 2025-05-22 PASS 3 minutes
- 2025-05-23 PASS 3 minutes
- 2025-05-24 PASS 3 minutes
- 2025-05-25 PASS 3 minutes
- 2025-05-26 PASS 3 minutes
- 2025-05-27 PASS 3 minutes
- 2025-05-28
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-29 PASS 3 minutes
- 2025-05-30 PASS 3 minutes
- 2025-05-31 PASS 3 minutes
- 2025-06-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-02
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-03 PASS 3 minutes
- 2025-06-04 PASS 3 minutes
- 2025-06-05

### Error 2025-06-05T00:54:09+00:00
```
2025-06-05T00:54:09.2437789Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-05T00:54:09.2439991Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-05T00:54:09.2484023Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-06-05T00:54:09.2484655Z     resource_network_peering_test.go:180: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:54:09.2485092Z         
2025-06-05T00:54:09.2486347Z         Error: error creating project: test-acc-tf-p-8714793481610433380
2025-06-05T00:54:09.2486740Z         
2025-06-05T00:54:09.2487095Z           with mongodbatlas_project.my_project,
2025-06-05T00:54:09.2487759Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-06-05T00:54:09.2488370Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-06-05T00:54:09.2488701Z         
2025-06-05T00:54:09.2489190Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2489841Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2490432Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2490945Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (3.08s)
```

- 2025-06-06 PASS 3 minutes
- 2025-06-07 PASS 3 minutes
- 2025-06-08 PASS 3 minutes
- 2025-06-09 PASS 3 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-12 PASS 3 minutes
- 2025-06-13 PASS 3 minutes
- 2025-06-14 PASS 3 minutes
- 2025-06-15 PASS 3 minutes
- 2025-06-16 PASS 3 minutes
- 2025-06-17 PASS 3 minutes
- 2025-06-18 PASS 3 minutes
- 2025-06-19 PASS 3 minutes
- 2025-06-20 PASS 3 minutes
- 2025-06-21 PASS 3 minutes
- 2025-06-22

### Error 2025-06-22T00:44:14+00:00
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

- 2025-06-23 PASS 3 minutes
- 2025-06-24 PASS 3 minutes
- 2025-06-25 PASS 3 minutes
- 2025-06-26 PASS 3 minutes
- 2025-06-27 PASS 3 minutes
- 2025-06-28 PASS 3 minutes
- 2025-06-29 PASS 3 minutes
- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 7 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6247702Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6249960Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6379200Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6380616Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6381499Z         
2025-07-06T00:44:46.6382207Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6382816Z         
2025-07-06T00:44:46.6383408Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6384751Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6385834Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6386410Z         
2025-07-06T00:44:46.6387235Z         error getting project (6869c4077267b5775b682fe7): error getting project's
2025-07-06T00:44:46.6388081Z         limits (6869c4077267b5775b682fe7):
2025-07-06T00:44:46.6389130Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4077267b5775b682fe7/limits
2025-07-06T00:44:46.6390355Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6391484Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6392217Z         BadRequestDetail: 
2025-07-06T00:44:46.6394822Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (252.03s)
```

- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10 PASS 3 minutes