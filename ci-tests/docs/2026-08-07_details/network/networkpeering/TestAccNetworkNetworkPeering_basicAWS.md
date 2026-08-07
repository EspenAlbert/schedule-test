# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.02s
[2026-07-11 00:53](#error-2026-07-11t0053200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s
[2026-07-18 00:49](#error-2026-07-18t0049410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.08s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1419849Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-07-09T00:58:29.1466580Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-07-09T00:58:29.1520923Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-07-09T00:58:29.1521480Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-09T00:58:29.1521898Z         
2026-07-09T00:58:29.1522360Z         Error: error creating project: test-acc-tf-p-1157642735637840533
2026-07-09T00:58:29.1522768Z         
2026-07-09T00:58:29.1523131Z           with mongodbatlas_project.my_project,
2026-07-09T00:58:29.1523847Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-09T00:58:29.1524515Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-09T00:58:29.1524882Z         
2026-07-09T00:58:29.1525399Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:29.1526098Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:29.1526743Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1527222Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (80.23s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T00:53:20+00:00
```
2026-07-11T00:53:20.3238793Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-07-11T00:53:20.3301490Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-07-11T00:53:20.3315700Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-07-11T00:53:20.3316339Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-11T00:53:20.3316805Z         
2026-07-11T00:53:20.3317312Z         Error: error creating project: test-acc-tf-p-3144194888844742781
2026-07-11T00:53:20.3317959Z         
2026-07-11T00:53:20.3318363Z           with mongodbatlas_project.my_project,
2026-07-11T00:53:20.3319140Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-11T00:53:20.3319859Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-11T00:53:20.3320382Z         
2026-07-11T00:53:20.3320951Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:53:20.3321700Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:53:20.3322385Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:53:20.3322901Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (61.96s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 3 minutes
- 2026-07-14 PASS 3 minutes
- 2026-07-15 PASS 3 minutes
- 2026-07-16 PASS 3 minutes
- 2026-07-17 PASS 3 minutes
- 2026-07-18

### Error 2026-07-18T00:49:41+00:00
```
2026-07-18T00:49:41.0900371Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-07-18T00:49:41.0938642Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-07-18T00:49:41.0986594Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-07-18T00:49:41.0987116Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-18T00:49:41.0987533Z         
2026-07-18T00:49:41.0987983Z         Error: error creating project: test-acc-tf-p-5589309775326717546
2026-07-18T00:49:41.0988386Z         
2026-07-18T00:49:41.0988758Z           with mongodbatlas_project.my_project,
2026-07-18T00:49:41.0989410Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-18T00:49:41.0990035Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-18T00:49:41.0990390Z         
2026-07-18T00:49:41.0990891Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:41.0991662Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:41.0992262Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:41.0992715Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (85.79s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.4894226Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-07-21T00:51:26.4968234Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-07-21T00:51:26.5002092Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-07-21T00:51:26.5002655Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-21T00:51:26.5003078Z         
2026-07-21T00:51:26.5003749Z         Error: error creating project: test-acc-tf-p-1429703190147471317
2026-07-21T00:51:26.5004159Z         
2026-07-21T00:51:26.5004532Z           with mongodbatlas_project.my_project,
2026-07-21T00:51:26.5005242Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-21T00:51:26.5005930Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-21T00:51:26.5006303Z         
2026-07-21T00:51:26.5006825Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:51:26.5007530Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:51:26.5008302Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.5008797Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (74.27s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2128088Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-07-23T00:53:54.2210754Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-07-23T00:53:54.2249230Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-07-23T00:53:54.2250060Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-23T00:53:54.2250728Z         
2026-07-23T00:53:54.2251491Z         Error: error creating project: test-acc-tf-p-4797937265987625116
2026-07-23T00:53:54.2252148Z         
2026-07-23T00:53:54.2252761Z           with mongodbatlas_project.my_project,
2026-07-23T00:53:54.2253797Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-07-23T00:53:54.2254907Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-07-23T00:53:54.2255364Z         
2026-07-23T00:53:54.2255933Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:53:54.2256674Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:53:54.2257388Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:53:54.2258089Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:53:54.2258574Z         BadRequestDetail: 
2026-07-23T00:53:54.2283000Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (1.28s)
```

- 2026-07-24 PASS 2 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 2 minutes
- 2026-08-01 PASS 2 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
