# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:03](#error-2026-05-09t0103400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.10s
[2026-05-16 01:01](#error-2026-05-16t0101160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.09s
[2026-05-19 01:08](#error-2026-05-19t0108530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.09s
[2026-05-21 01:09](#error-2026-05-21t0109200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s
[2026-05-26 02:14](#error-2026-05-26t0214440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-05-30 01:07](#error-2026-05-30t0107110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s
[2026-06-02 01:13](#error-2026-06-02t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-05-08 PASS 2 minutes
- 2026-05-09

### Error 2026-05-09T01:03:40+00:00
```
2026-05-09T01:03:40.8362834Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-05-09T01:03:40.8365044Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-05-09T01:03:40.8404310Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-05-09T01:03:40.8405144Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-09T01:03:40.8405810Z         
2026-05-09T01:03:40.8406387Z         Error: error creating project: test-acc-tf-p-3477920016834966113
2026-05-09T01:03:40.8406989Z         
2026-05-09T01:03:40.8407481Z           with mongodbatlas_project.my_project,
2026-05-09T01:03:40.8408556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-09T01:03:40.8409517Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-09T01:03:40.8409984Z         
2026-05-09T01:03:40.8410644Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:03:40.8411489Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:03:40.8412266Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:03:40.8412921Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (72.98s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 2 minutes
- 2026-05-12 PASS 3 minutes
- 2026-05-13 PASS 2 minutes
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 2 minutes
- 2026-05-16

### Error 2026-05-16T01:01:16+00:00
```
2026-05-16T01:01:16.0184227Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-05-16T01:01:16.0185933Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-05-16T01:01:16.0230224Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-05-16T01:01:16.0230986Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-16T01:01:16.0231556Z         
2026-05-16T01:01:16.0232024Z         Error: error creating project: test-acc-tf-p-8021737691634836735
2026-05-16T01:01:16.0232422Z         
2026-05-16T01:01:16.0232938Z           with mongodbatlas_project.my_project,
2026-05-16T01:01:16.0233676Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-16T01:01:16.0234365Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-16T01:01:16.0234716Z         
2026-05-16T01:01:16.0235234Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:01:16.0235944Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:01:16.0236594Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:01:16.0237073Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (74.90s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 2 minutes
- 2026-05-19

### Error 2026-05-19T01:08:53+00:00
```
2026-05-19T01:08:53.2989855Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-05-19T01:08:53.2992285Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-05-19T01:08:53.3014405Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-05-19T01:08:53.3015115Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-19T01:08:53.3015673Z         
2026-05-19T01:08:53.3016414Z         Error: error creating project: test-acc-tf-p-7732403203736901269
2026-05-19T01:08:53.3016834Z         
2026-05-19T01:08:53.3017193Z           with mongodbatlas_project.my_project,
2026-05-19T01:08:53.3017882Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-19T01:08:53.3018551Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-19T01:08:53.3018915Z         
2026-05-19T01:08:53.3019426Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:53.3020120Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:53.3020754Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.3021238Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (98.86s)
```

- 2026-05-20 PASS 2 minutes
- 2026-05-21

### Error 2026-05-21T01:09:20+00:00
```
2026-05-21T01:09:20.3278458Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-05-21T01:09:20.3280514Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-05-21T01:09:20.3293650Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-05-21T01:09:20.3294382Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-21T01:09:20.3294924Z         
2026-05-21T01:09:20.3295393Z         Error: error creating project: test-acc-tf-p-3233308103039875805
2026-05-21T01:09:20.3295791Z         
2026-05-21T01:09:20.3296148Z           with mongodbatlas_project.my_project,
2026-05-21T01:09:20.3296962Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-21T01:09:20.3297635Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-21T01:09:20.3297996Z         
2026-05-21T01:09:20.3298519Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:09:20.3299213Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:09:20.3300051Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:20.3300538Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (65.90s)
```

- 2026-05-22 PASS 2 minutes
- 2026-05-23 PASS 2 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26

### Error 2026-05-26T02:14:44+00:00
```
2026-05-26T02:14:44.2241117Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-05-26T02:14:44.2242667Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-05-26T02:14:44.2258818Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-05-26T02:14:44.2259454Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-26T02:14:44.2259942Z         
2026-05-26T02:14:44.2260388Z         Error: error creating project: test-acc-tf-p-3385339110290127059
2026-05-26T02:14:44.2260864Z         
2026-05-26T02:14:44.2261209Z           with mongodbatlas_project.my_project,
2026-05-26T02:14:44.2261839Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-26T02:14:44.2262435Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-26T02:14:44.2262766Z         
2026-05-26T02:14:44.2263223Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:44.2263850Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:44.2264414Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:44.2264849Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (67.33s)
```

- 2026-05-27 PASS 2 minutes
- 2026-05-28 PASS 2 minutes
- 2026-05-29 PASS 2 minutes
- 2026-05-30

### Error 2026-05-30T01:07:11+00:00
```
2026-05-30T01:07:11.7223501Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-05-30T01:07:11.7225603Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-05-30T01:07:11.7238190Z   
2026-05-30T01:07:11.7238803Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-30T01:07:11.7239351Z         
2026-05-30T01:07:11.7239832Z         Error: error creating project: test-acc-tf-p-7335495046173056403
2026-05-30T01:07:11.7240245Z         
2026-05-30T01:07:11.7240619Z           with mongodbatlas_project.my_project,
2026-05-30T01:07:11.7241613Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-05-30T01:07:11.7242299Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-05-30T01:07:11.7242666Z         
2026-05-30T01:07:11.7243332Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:07:11.7244040Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:07:11.7244676Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:07:11.7245166Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (69.71s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 2 minutes
- 2026-06-02

### Error 2026-06-02T01:13:23+00:00
```
2026-06-02T01:13:23.3358043Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-06-02T01:13:23.3360569Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-06-02T01:13:23.3373406Z   
2026-06-02T01:13:23.3374145Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-06-02T01:13:23.3374732Z         
2026-06-02T01:13:23.3375237Z         Error: error creating project: test-acc-tf-p-3491180611648013635
2026-06-02T01:13:23.3375670Z         
2026-06-02T01:13:23.3376066Z           with mongodbatlas_project.my_project,
2026-06-02T01:13:23.3376816Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2026-06-02T01:13:23.3377514Z           12: 	resource "mongodbatlas_project" "my_project" {
2026-06-02T01:13:23.3377898Z         
2026-06-02T01:13:23.3378444Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:13:23.3379163Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:13:23.3379823Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3380327Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (62.74s)
```

- 2026-06-03 PASS 2 minutes
- 2026-06-04 PASS 2 minutes
- 2026-06-05 PASS 2 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
