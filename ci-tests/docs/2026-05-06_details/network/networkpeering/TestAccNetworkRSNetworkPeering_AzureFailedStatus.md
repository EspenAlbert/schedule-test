# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 237.02s
[2026-04-08 00:55](#error-2026-04-08t0055370000) | NO_CAPACITY /api/atlas/v2/groups/69d5a5144a37287164dfc4a8/containers | dev |  | 6.02s
[2026-04-09 00:44](#error-2026-04-09t0044320000) | NO_CAPACITY /api/atlas/v2/groups/69d6f4f39bb208aac6062436/containers | dev | flaky_500 | 63.03s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-04-14 00:55](#error-2026-04-14t0055580000) |  | dev | flaky_500 | 288.06s
[2026-04-28 01:00](#error-2026-04-28t0100060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 234.03s
[2026-04-30 01:05](#error-2026-04-30t0105010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 221.05s
[2026-05-05 00:57](#error-2026-05-05t0057450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 243.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:10+00:00
```
2026-04-07T00:51:10.3245852Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-07T00:51:10.3250906Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-07T00:51:10.3286055Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-07T00:51:10.3286860Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-07T00:51:10.3287391Z         
2026-04-07T00:51:10.3287829Z         Error: error creating project: test-acc-tf-p-8749986087287794422
2026-04-07T00:51:10.3288209Z         
2026-04-07T00:51:10.3288537Z           with mongodbatlas_project.second,
2026-04-07T00:51:10.3289188Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-04-07T00:51:10.3289797Z           36: 		resource "mongodbatlas_project" "second" {
2026-04-07T00:51:10.3290122Z         
2026-04-07T00:51:10.3290615Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:51:10.3291285Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:51:10.3291896Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:10.3293076Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (237.18s)
```

- 2026-04-08

### Error 2026-04-08T00:55:37+00:00
```
2026-04-08T00:55:37.7069125Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-08T00:55:37.7073394Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-08T00:55:37.7119155Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-08T00:55:37.7119883Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-08T00:55:37.7120412Z         
2026-04-08T00:55:37.7122558Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a5144a37287164dfc4a8/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d5a5144a37287164dfc4a8. Reason: Conflict. Params: [AZURE 69d5a5144a37287164dfc4a8], BadRequestDetail: 
2026-04-08T00:55:37.7123922Z         
2026-04-08T00:55:37.7124294Z           with mongodbatlas_network_container.first,
2026-04-08T00:55:37.7125019Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-04-08T00:55:37.7125698Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-04-08T00:55:37.7126052Z         
2026-04-08T00:55:37.7128184Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a51474e39a6641499bee/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d5a51474e39a6641499bee. Reason: Conflict. Params: [AZURE 69d5a51474e39a6641499bee], BadRequestDetail: 
2026-04-08T00:55:37.7129528Z         
2026-04-08T00:55:37.7129909Z           with mongodbatlas_network_container.second,
2026-04-08T00:55:37.7130635Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-04-08T00:55:37.7131321Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-04-08T00:55:37.7131678Z         
2026-04-08T00:55:37.7132012Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (6.23s)
```

- 2026-04-09

### Error 2026-04-09T00:44:32+00:00
```
2026-04-09T00:44:32.8833995Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-09T00:44:32.8838987Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-09T00:44:32.8882439Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-09T00:44:32.8883201Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-09T00:44:32.8883730Z         
2026-04-09T00:44:32.8885868Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4f39bb208aac6062436/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d6f4f39bb208aac6062436. Reason: Conflict. Params: [AZURE 69d6f4f39bb208aac6062436], BadRequestDetail: 
2026-04-09T00:44:32.8887183Z         
2026-04-09T00:44:32.8887569Z           with mongodbatlas_network_container.first,
2026-04-09T00:44:32.8888309Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-04-09T00:44:32.8888999Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-04-09T00:44:32.8889365Z         
2026-04-09T00:44:32.8891479Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4f39bb208aac606242f/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d6f4f39bb208aac606242f. Reason: Conflict. Params: [AZURE 69d6f4f39bb208aac606242f], BadRequestDetail: 
2026-04-09T00:44:32.8892950Z         
2026-04-09T00:44:32.8893349Z           with mongodbatlas_network_container.second,
2026-04-09T00:44:32.8894087Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-04-09T00:44:32.8895001Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-04-09T00:44:32.8895372Z         
2026-04-09T00:44:32.8896352Z   diagnostic_summary=
2026-04-09T00:44:32.8899857Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_network_peering tf_req_id=db9de7da-5068-ae3d-9a0e-a74f439f563f diagnostic_detail=""
2026-04-09T00:44:32.8900903Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (63.35s)
```

- 2026-04-10 PASS 3 minutes
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7890487Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-11T00:49:03.7895589Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-11T00:49:03.7917290Z   
2026-04-11T00:49:03.7917886Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-11T00:49:03.7918407Z         
2026-04-11T00:49:03.7919098Z         Error: error creating project: test-acc-tf-p-3222872785970267035
2026-04-11T00:49:03.7919499Z         
2026-04-11T00:49:03.7919995Z           with mongodbatlas_project.first,
2026-04-11T00:49:03.7920675Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "first":
2026-04-11T00:49:03.7921292Z           13: 		resource "mongodbatlas_project" "first" {
2026-04-11T00:49:03.7921628Z         
2026-04-11T00:49:03.7922141Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:49:03.7922832Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:49:03.7923474Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:49:03.7923859Z         
2026-04-11T00:49:03.7925805Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d99938a916b4e11799da38/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d99938a916b4e11799da38. Reason: Conflict. Params: [AZURE 69d99938a916b4e11799da38], BadRequestDetail: 
2026-04-11T00:49:03.7927120Z         
2026-04-11T00:49:03.7927518Z           with mongodbatlas_network_container.second,
2026-04-11T00:49:03.7928262Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-04-11T00:49:03.7929175Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-04-11T00:49:03.7929544Z         
2026-04-11T00:49:03.7929897Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (68.60s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 8 minutes
- 2026-04-14

### Error 2026-04-14T00:55:58+00:00
```
2026-04-14T00:55:58.2638111Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-14T00:55:58.2643176Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-14T00:55:58.2679440Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-14T00:55:58.2680155Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-14T00:55:58.2680671Z         
2026-04-14T00:55:58.2681104Z         Error: error creating project: test-acc-tf-p-5133597266007312010
2026-04-14T00:55:58.2681485Z         
2026-04-14T00:55:58.2681814Z           with mongodbatlas_project.second,
2026-04-14T00:55:58.2682469Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-04-14T00:55:58.2683076Z           36: 		resource "mongodbatlas_project" "second" {
2026-04-14T00:55:58.2683400Z         
2026-04-14T00:55:58.2683885Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-04-14T00:55:58.2684319Z         type
2026-04-14T00:55:58.2686087Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (288.64s)
```

- 2026-04-15 PASS 3 minutes
- 2026-04-16 PASS 4 minutes
- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 3 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 8 minutes
- 2026-04-22 PASS 34 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 8 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28

### Error 2026-04-28T01:00:06+00:00
```
2026-04-28T01:00:06.5926841Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-28T01:00:06.5932084Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-28T01:00:06.5958112Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-28T01:00:06.5958874Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-28T01:00:06.5959411Z         
2026-04-28T01:00:06.5959880Z         Error: error creating project: test-acc-tf-p-7553706788482258167
2026-04-28T01:00:06.5960286Z         
2026-04-28T01:00:06.5960639Z           with mongodbatlas_project.second,
2026-04-28T01:00:06.5961549Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-04-28T01:00:06.5962192Z           36: 		resource "mongodbatlas_project" "second" {
2026-04-28T01:00:06.5962543Z         
2026-04-28T01:00:06.5963070Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-28T01:00:06.5963765Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-28T01:00:06.5964387Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-28T01:00:06.5966492Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (234.25s)
```

- 2026-04-29 PASS 8 minutes
- 2026-04-30

### Error 2026-04-30T01:05:01+00:00
```
2026-04-30T01:05:01.7349203Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-30T01:05:01.7358707Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-30T01:05:01.7373944Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-04-30T01:05:01.7374742Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-30T01:05:01.7375541Z         
2026-04-30T01:05:01.7376073Z         Error: error creating project: test-acc-tf-p-2456308880721747755
2026-04-30T01:05:01.7376504Z         
2026-04-30T01:05:01.7376878Z           with mongodbatlas_project.second,
2026-04-30T01:05:01.7377601Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-04-30T01:05:01.7378277Z           36: 		resource "mongodbatlas_project" "second" {
2026-04-30T01:05:01.7378642Z         
2026-04-30T01:05:01.7379189Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:05:01.7379922Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:05:01.7380742Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:05:01.7393826Z   
2026-04-30T01:05:01.7427211Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (221.54s)
```

- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 3 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 8 minutes
- 2026-05-05

### Error 2026-05-05T00:57:45+00:00
```
2026-05-05T00:57:45.1438597Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-05T00:57:45.1443133Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-05T00:57:45.1481152Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-05-05T00:57:45.1481863Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-05T00:57:45.1482378Z         
2026-05-05T00:57:45.1482815Z         Error: error creating project: test-acc-tf-p-4713135984246457051
2026-05-05T00:57:45.1483195Z         
2026-05-05T00:57:45.1483523Z           with mongodbatlas_project.second,
2026-05-05T00:57:45.1484410Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-05-05T00:57:45.1485041Z           36: 		resource "mongodbatlas_project" "second" {
2026-05-05T00:57:45.1485389Z         
2026-05-05T00:57:45.1485893Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:57:45.1486572Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:57:45.1487184Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:45.1491424Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (243.21s)
```

- 2026-05-06 PASS 3 minutes

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
- 2026-04-12 PASS 8 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 minutes
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
- 2026-05-06 PASS 8 minutes
