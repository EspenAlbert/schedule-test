# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:03](#error-2026-05-09t0103400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.00s
[2026-05-23 01:05](#error-2026-05-23t0105240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-05-28 01:03](#error-2026-05-28t0103330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-05-30 01:07](#error-2026-05-30t0107110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.06s
[2026-06-02 01:13](#error-2026-06-02t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 4 minutes
  - PASS 3 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09

### Error 2026-05-09T01:03:40+00:00
```
2026-05-09T01:03:40.8361560Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-09T01:03:40.8364430Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-09T01:03:40.8427795Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-09T01:03:40.8428588Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-05-09T01:03:40.8429120Z         
2026-05-09T01:03:40.8429738Z         Error: error creating project: test-acc-tf-p-3223032531777895965
2026-05-09T01:03:40.8430249Z         
2026-05-09T01:03:40.8430767Z           with mongodbatlas_project.my_project,
2026-05-09T01:03:40.8431640Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-09T01:03:40.8432499Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-09T01:03:40.8432974Z         
2026-05-09T01:03:40.8433593Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:03:40.8434425Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:03:40.8435210Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:03:40.8435913Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (77.03s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 3 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 4 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16 PASS 3 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 3 minutes
- 2026-05-19 PASS 3 minutes
- 2026-05-20 PASS 3 minutes
- 2026-05-21 PASS 3 minutes
- 2026-05-22 PASS 3 minutes
- 2026-05-23

### Error 2026-05-23T01:05:24+00:00
```
2026-05-23T01:05:24.4083888Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-23T01:05:24.4086268Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-23T01:05:24.4125127Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-23T01:05:24.4125765Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-05-23T01:05:24.4126203Z         
2026-05-23T01:05:24.4126679Z         Error: error creating project: test-acc-tf-p-6059350242339718401
2026-05-23T01:05:24.4127099Z         
2026-05-23T01:05:24.4127480Z           with mongodbatlas_project.my_project,
2026-05-23T01:05:24.4128193Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-23T01:05:24.4128867Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-23T01:05:24.4129231Z         
2026-05-23T01:05:24.4129751Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:05:24.4130454Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:05:24.4131094Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:24.4131669Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (67.80s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 4 minutes
- 2026-05-26 PASS 3 minutes
- 2026-05-27 PASS 3 minutes
- 2026-05-28

### Error 2026-05-28T01:03:33+00:00
```
2026-05-28T01:03:33.2257484Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-28T01:03:33.2259181Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-28T01:03:33.2286861Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-28T01:03:33.2287334Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:03:33.2287672Z         
2026-05-28T01:03:33.2288040Z         Error: error creating project: test-acc-tf-p-663187541595633159
2026-05-28T01:03:33.2288359Z         
2026-05-28T01:03:33.2288662Z           with mongodbatlas_project.my_project,
2026-05-28T01:03:33.2289211Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-28T01:03:33.2289726Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-28T01:03:33.2290010Z         
2026-05-28T01:03:33.2290423Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:03:33.2290972Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:03:33.2291465Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:03:33.2291887Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (63.10s)
```

- 2026-05-29 PASS 3 minutes
- 2026-05-30

### Error 2026-05-30T01:07:11+00:00
```
2026-05-30T01:07:11.7222549Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-30T01:07:11.7224721Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-30T01:07:11.7262153Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-05-30T01:07:11.7262776Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:07:11.7263205Z         
2026-05-30T01:07:11.7263679Z         Error: error creating project: test-acc-tf-p-5654844543580251930
2026-05-30T01:07:11.7264086Z         
2026-05-30T01:07:11.7264462Z           with mongodbatlas_project.my_project,
2026-05-30T01:07:11.7265161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-30T01:07:11.7265831Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-30T01:07:11.7266198Z         
2026-05-30T01:07:11.7266714Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:07:11.7267466Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:07:11.7268389Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:07:11.7268970Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (85.63s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02

### Error 2026-06-02T01:13:23+00:00
```
2026-06-02T01:13:23.3357077Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-06-02T01:13:23.3359269Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-06-02T01:13:23.3398220Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-06-02T01:13:23.3398871Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:13:23.3399320Z         
2026-06-02T01:13:23.3399809Z         Error: error creating project: test-acc-tf-p-3131190474685555122
2026-06-02T01:13:23.3400236Z         
2026-06-02T01:13:23.3400734Z           with mongodbatlas_project.my_project,
2026-06-02T01:13:23.3401506Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-06-02T01:13:23.3402204Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-06-02T01:13:23.3402594Z         
2026-06-02T01:13:23.3403140Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:13:23.3403872Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:13:23.3404743Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3405303Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (80.81s)
```

- 2026-06-03 PASS 3 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 4 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
