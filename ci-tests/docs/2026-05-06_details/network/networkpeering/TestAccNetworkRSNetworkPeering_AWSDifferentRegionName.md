# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:44](#error-2026-04-09t0044320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.03s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 119.09s
[2026-04-14 00:55](#error-2026-04-14t0055580000) |  | dev | flaky_500 | 65.02s
[2026-04-16 00:55](#error-2026-04-16t0055120000) | NO_CAPACITY /api/atlas/v2/groups/69e0325d8379397d109c4b14/containers | dev |  | 31.04s
[2026-04-30 01:05](#error-2026-04-30t0105010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.03s
[2026-05-05 00:57](#error-2026-05-05t0057450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 minutes
- 2026-04-08 PASS 3 minutes
- 2026-04-09

### Error 2026-04-09T00:44:32+00:00
```
2026-04-09T00:44:32.8836237Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-09T00:44:32.8838521Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-09T00:44:32.8916599Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-09T00:44:32.8917359Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-04-09T00:44:32.8917787Z         
2026-04-09T00:44:32.8918247Z         Error: error creating project: test-acc-tf-p-3261714151065238046
2026-04-09T00:44:32.8918641Z         
2026-04-09T00:44:32.8919012Z           with mongodbatlas_project.my_project,
2026-04-09T00:44:32.8919707Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-09T00:44:32.8920365Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-09T00:44:32.8920719Z         
2026-04-09T00:44:32.8921233Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:44:32.8921917Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:44:32.8922544Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:44:32.8923066Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (81.25s)
```

- 2026-04-10 PASS 3 minutes
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7892565Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-11T00:49:03.7894780Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-11T00:49:03.7964283Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-11T00:49:03.7964879Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:49:03.7965285Z         
2026-04-11T00:49:03.7965742Z         Error: error creating project: test-acc-tf-p-1927550881106326251
2026-04-11T00:49:03.7966131Z         
2026-04-11T00:49:03.7966496Z           with mongodbatlas_project.my_project,
2026-04-11T00:49:03.7967188Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-11T00:49:03.7967841Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-11T00:49:03.7968198Z         
2026-04-11T00:49:03.7968803Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:49:03.7969488Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:49:03.7970113Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:49:03.7970635Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (119.91s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 3 minutes
- 2026-04-14

### Error 2026-04-14T00:55:58+00:00
```
2026-04-14T00:55:58.2640105Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-14T00:55:58.2642191Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-14T00:55:58.2663229Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-14T00:55:58.2663860Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-04-14T00:55:58.2664262Z         
2026-04-14T00:55:58.2664696Z         Error: error creating project: test-acc-tf-p-6282888773088292147
2026-04-14T00:55:58.2665081Z         
2026-04-14T00:55:58.2665421Z           with mongodbatlas_project.my_project,
2026-04-14T00:55:58.2666117Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-14T00:55:58.2667150Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-14T00:55:58.2667489Z         
2026-04-14T00:55:58.2667984Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-14T00:55:58.2668422Z         type
2026-04-14T00:55:58.2668789Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (65.17s)
```

- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T00:55:12+00:00
```
2026-04-16T00:55:12.9237011Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-16T00:55:12.9239126Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-16T00:55:12.9278924Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-16T00:55:12.9279549Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:55:12.9279976Z         
2026-04-16T00:55:12.9282162Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325d8379397d109c4b14/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 69e0325d8379397d109c4b14. Reason: Conflict. Params: [AWS 69e0325d8379397d109c4b14], BadRequestDetail: 
2026-04-16T00:55:12.9283519Z         
2026-04-16T00:55:12.9283907Z           with mongodbatlas_network_container.test,
2026-04-16T00:55:12.9284638Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_network_container" "test":
2026-04-16T00:55:12.9285324Z           16: 	resource "mongodbatlas_network_container" "test" {
2026-04-16T00:55:12.9285682Z         
2026-04-16T00:55:12.9286047Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (31.36s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 4 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 35 minutes
- 2026-04-23 PASS 4 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 3 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30

### Error 2026-04-30T01:05:01+00:00
```
2026-04-30T01:05:01.7352932Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-30T01:05:01.7360207Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-30T01:05:01.7372930Z    test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus test_terraform_path=/home/runner/work/_temp/98e4bc32-e03a-4a98-a968-b26fe086d172/terraform test_working_directory=/tmp/plugintest2882799010
2026-04-30T01:05:01.7414210Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-04-30T01:05:01.7415122Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-04-30T01:05:01.7416129Z         
2026-04-30T01:05:01.7417030Z         Error: error creating project: test-acc-tf-p-1742747336032823628
2026-04-30T01:05:01.7417782Z         
2026-04-30T01:05:01.7418487Z           with mongodbatlas_project.my_project,
2026-04-30T01:05:01.7419433Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-30T01:05:01.7420157Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-30T01:05:01.7420541Z         
2026-04-30T01:05:01.7421086Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:05:01.7421821Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:05:01.7422493Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:05:01.7423059Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (89.34s)
```

- 2026-05-01 PASS 4 minutes
- 2026-05-02 PASS 4 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05

### Error 2026-05-05T00:57:45+00:00
```
2026-05-05T00:57:45.1440591Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-05T00:57:45.1442641Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-05T00:57:45.1466627Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-05T00:57:45.1467236Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-05-05T00:57:45.1467638Z         
2026-05-05T00:57:45.1468071Z         Error: error creating project: test-acc-tf-p-4324318009077426695
2026-05-05T00:57:45.1468466Z         
2026-05-05T00:57:45.1468899Z           with mongodbatlas_project.my_project,
2026-05-05T00:57:45.1469629Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-05T00:57:45.1470269Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-05T00:57:45.1470608Z         
2026-05-05T00:57:45.1471093Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:57:45.1471754Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:57:45.1472369Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:45.1473024Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (83.83s)
```

- 2026-05-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 4 minutes
  - PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 4 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 4 minutes
- 2026-05-04
  - PASS 4 minutes
  - PASS 3 minutes
- 2026-05-05 PASS 3 minutes
- 2026-05-06 PASS 3 minutes
