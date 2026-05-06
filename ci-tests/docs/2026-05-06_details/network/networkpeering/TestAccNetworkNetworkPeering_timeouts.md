# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.01s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.02s
[2026-04-16 00:55](#error-2026-04-16t0055120000) | NO_CAPACITY /api/atlas/v2/groups/69e0325d8379397d109c4b30/containers | dev | flaky_500 | 11.06s
[2026-04-18 00:50](#error-2026-04-18t0050430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-04-22 01:27](#error-2026-04-22t0127070000) |  | dev |  | 345.02s
[2026-04-30 01:05](#error-2026-04-30t0105010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:10+00:00
```
2026-04-07T00:51:10.3248795Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-04-07T00:51:10.3250494Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-04-07T00:51:10.3268258Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-04-07T00:51:10.3268944Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-07T00:51:10.3269468Z         
2026-04-07T00:51:10.3269904Z         Error: error creating project: test-acc-tf-p-7960233895982306323
2026-04-07T00:51:10.3270279Z         
2026-04-07T00:51:10.3270619Z           with mongodbatlas_project.my_project,
2026-04-07T00:51:10.3271301Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-07T00:51:10.3271944Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-07T00:51:10.3272462Z         
2026-04-07T00:51:10.3273001Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-07T00:51:10.3273671Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-07T00:51:10.3274281Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:51:10.3274876Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (71.07s)
```

- 2026-04-08 PASS 2 minutes
- 2026-04-09 PASS 3 minutes
- 2026-04-10 PASS 2 minutes
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7893475Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-04-11T00:49:03.7895191Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-04-11T00:49:03.7942224Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-04-11T00:49:03.7942945Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-11T00:49:03.7943473Z         
2026-04-11T00:49:03.7943931Z         Error: error creating project: test-acc-tf-p-940317127477625781
2026-04-11T00:49:03.7944324Z         
2026-04-11T00:49:03.7944786Z           with mongodbatlas_project.my_project,
2026-04-11T00:49:03.7945521Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-11T00:49:03.7946340Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-11T00:49:03.7946710Z         
2026-04-11T00:49:03.7947226Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:49:03.7947917Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:49:03.7948555Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:49:03.7949247Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (85.24s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 2 minutes
- 2026-04-14 PASS 2 minutes
- 2026-04-15 PASS 2 minutes
- 2026-04-16

### Error 2026-04-16T00:55:12+00:00
```
2026-04-16T00:55:12.9237947Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-04-16T00:55:12.9240010Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-04-16T00:55:12.9255015Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-04-16T00:55:12.9256305Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T00:55:12.9257293Z         
2026-04-16T00:55:12.9260928Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325d8379397d109c4b30/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 69e0325d8379397d109c4b30. Reason: Conflict. Params: [AWS 69e0325d8379397d109c4b30], BadRequestDetail: 
2026-04-16T00:55:12.9262773Z         
2026-04-16T00:55:12.9263186Z           with mongodbatlas_network_container.test,
2026-04-16T00:55:12.9263939Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_network_container" "test":
2026-04-16T00:55:12.9264635Z           16: 	resource "mongodbatlas_network_container" "test" {
2026-04-16T00:55:12.9265006Z         
2026-04-16T00:55:12.9265322Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (11.61s)
```

- 2026-04-17 PASS 2 minutes
- 2026-04-18

### Error 2026-04-18T00:50:43+00:00
```
2026-04-18T00:50:43.9062195Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-04-18T00:50:43.9063785Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-04-18T00:50:43.9081312Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-04-18T00:50:43.9082304Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-18T00:50:43.9082852Z         
2026-04-18T00:50:43.9083308Z         Error: error creating project: test-acc-tf-p-3646950144437925099
2026-04-18T00:50:43.9083696Z         
2026-04-18T00:50:43.9084050Z           with mongodbatlas_project.my_project,
2026-04-18T00:50:43.9084959Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-18T00:50:43.9085628Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-18T00:50:43.9085976Z         
2026-04-18T00:50:43.9086487Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:50:43.9087174Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:50:43.9087898Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:50:43.9088406Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (63.68s)
```

- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 3 minutes
- 2026-04-22

### Error 2026-04-22T01:27:07+00:00
```
2026-04-22T01:27:07.0542076Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-04-22T01:27:07.0543367Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-04-22T01:27:07.0562184Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-04-22T01:27:07.0562984Z     resource_test.go:212: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-22T01:27:07.0563597Z         
2026-04-22T01:27:07.0564475Z         Error: error deleting MongoDB Network Peering Container (69e81a4d632b92cc72e42d3c): couldn't find resource (21 retries)
2026-04-22T01:27:07.0565154Z         
2026-04-22T01:27:07.0565536Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (345.17s)
```

- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 2 minutes
- 2026-04-25 PASS 2 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 2 minutes
- 2026-04-30

### Error 2026-04-30T01:05:01+00:00
```
2026-04-30T01:05:01.7354742Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-04-30T01:05:01.7357928Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-04-30T01:05:01.7394125Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-04-30T01:05:01.7394870Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-30T01:05:01.7395633Z         
2026-04-30T01:05:01.7396124Z         Error: error creating project: test-acc-tf-p-2896485581683473485
2026-04-30T01:05:01.7396546Z         
2026-04-30T01:05:01.7396925Z           with mongodbatlas_project.my_project,
2026-04-30T01:05:01.7397668Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-04-30T01:05:01.7398363Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-04-30T01:05:01.7398738Z         
2026-04-30T01:05:01.7399273Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:05:01.7399990Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:05:01.7400647Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:05:01.7401151Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (87.60s)
```

- 2026-05-01 PASS 2 minutes
- 2026-05-02 PASS 3 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 minutes
- 2026-05-04
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 2 minutes
