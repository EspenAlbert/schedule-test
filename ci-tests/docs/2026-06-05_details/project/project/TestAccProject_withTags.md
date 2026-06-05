# project/project/TestAccProject_withTags Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.04s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.04s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.08s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-05-30 01:02](#error-2026-05-30t0102110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 110.05s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev | flaky_client | 279.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 57 seconds
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2667716Z === RUN   TestAccProject_withTags
2026-05-09T00:56:55.2669861Z === CONT  TestAccProject_withTags
2026-05-09T00:56:55.2824884Z === NAME  TestAccProject_withTags
2026-05-09T00:56:55.2825373Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-05-09T00:56:55.2825780Z         
2026-05-09T00:56:55.2826195Z         Error: error creating project: test-acc-tf-p-7859175463076360837
2026-05-09T00:56:55.2826554Z         
2026-05-09T00:56:55.2826997Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2827606Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2828177Z           12: resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2828473Z         
2026-05-09T00:56:55.2828936Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2829585Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2830172Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2830566Z --- FAIL: TestAccProject_withTags (99.39s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 38 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 43 seconds
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 39 seconds
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7292832Z === RUN   TestAccProject_withTags
2026-05-16T00:55:42.7296399Z === CONT  TestAccProject_withTags
2026-05-16T00:55:42.7332705Z === NAME  TestAccProject_withTags
2026-05-16T00:55:42.7333219Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-05-16T00:55:42.7333628Z         
2026-05-16T00:55:42.7334276Z         Error: error creating project: test-acc-tf-p-5815601771999546205
2026-05-16T00:55:42.7334693Z         
2026-05-16T00:55:42.7335010Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7335629Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7336199Z           12: resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7336656Z         
2026-05-16T00:55:42.7337138Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7337800Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7338393Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7338787Z --- FAIL: TestAccProject_withTags (66.43s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 41 seconds
- 2026-05-19 PASS 2 minutes
- 2026-05-20 PASS a minute
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9153474Z === RUN   TestAccProject_withTags
2026-05-21T01:04:31.9155565Z === CONT  TestAccProject_withTags
2026-05-21T01:04:31.9278119Z === NAME  TestAccProject_withTags
2026-05-21T01:04:31.9278616Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-05-21T01:04:31.9279027Z         
2026-05-21T01:04:31.9279443Z         Error: error creating project: test-acc-tf-p-4030028610150951672
2026-05-21T01:04:31.9279801Z         
2026-05-21T01:04:31.9280240Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9281162Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9281736Z           12: resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9282049Z         
2026-05-21T01:04:31.9282519Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9283173Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9283773Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9284218Z --- FAIL: TestAccProject_withTags (80.79s)
```

- 2026-05-22 PASS 55 seconds
- 2026-05-23 PASS 3 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 40 seconds
- 2026-05-26 PASS 2 minutes
- 2026-05-27 PASS 44 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1603332Z === RUN   TestAccProject_withTags
2026-05-28T00:58:34.1606752Z === CONT  TestAccProject_withTags
2026-05-28T00:58:34.1638725Z === NAME  TestAccProject_withTags
2026-05-28T00:58:34.1639233Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-05-28T00:58:34.1639657Z         
2026-05-28T00:58:34.1640078Z         Error: error creating project: test-acc-tf-p-2165936553040141525
2026-05-28T00:58:34.1640449Z         
2026-05-28T00:58:34.1640755Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1641485Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1642066Z           12: resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1642377Z         
2026-05-28T00:58:34.1642854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1643527Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1644126Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1644532Z --- FAIL: TestAccProject_withTags (64.49s)
```

- 2026-05-29 PASS 44 seconds
- 2026-05-30

### Error 2026-05-30T01:02:11+00:00
```
2026-05-30T01:02:11.3453539Z === RUN   TestAccProject_withTags
2026-05-30T01:02:11.3455514Z === CONT  TestAccProject_withTags
2026-05-30T01:02:11.3590500Z === NAME  TestAccProject_withTags
2026-05-30T01:02:11.3591021Z     resource_project_test.go:1069: Step 1/8 error: Error running apply: exit status 1
2026-05-30T01:02:11.3591460Z         
2026-05-30T01:02:11.3591893Z         Error: error creating project: test-acc-tf-p-67438402818934939
2026-05-30T01:02:11.3592274Z         
2026-05-30T01:02:11.3592603Z           with mongodbatlas_project.test,
2026-05-30T01:02:11.3593237Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:11.3593827Z           12: resource "mongodbatlas_project" "test" {
2026-05-30T01:02:11.3594144Z         
2026-05-30T01:02:11.3594632Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:11.3595309Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:11.3595920Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:11.3596333Z --- FAIL: TestAccProject_withTags (110.48s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 41 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2440460Z === RUN   TestAccProject_withTags
2026-06-02T01:12:19.2448662Z === CONT  TestAccProject_withTags
2026-06-02T01:12:19.2467265Z    test_terraform_path=/home/runner/work/_temp/d52bcfdd-1092-46f3-b235-9e0bc163766d/terraform
2026-06-02T01:12:19.2808082Z === NAME  TestAccProject_withTags
2026-06-02T01:12:19.2808988Z     resource_project_test.go:1069: Step 5/8 error: Error running apply: exit status 1
2026-06-02T01:12:19.2809725Z         
2026-06-02T01:12:19.2810447Z         Error: error when getting project properties after create
2026-06-02T01:12:19.2811215Z         
2026-06-02T01:12:19.2811753Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2812815Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2813791Z           12: resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2814328Z         
2026-06-02T01:12:19.2815138Z         error getting project (6a1e2cd8f41b0149dfde0af4): error getting project's
2026-06-02T01:12:19.2816053Z         teams assigned (6a1e2cd8f41b0149dfde0af4): Get
2026-06-02T01:12:19.2817581Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1e2cd8f41b0149dfde0af4/teams?includeCount=true&itemsPerPage=100&pageNum=1":
2026-06-02T01:12:19.2818803Z         dial tcp 3.228.247.77:443: i/o timeout
2026-06-02T01:12:19.2833452Z    test_step_number=5 test_name=TestAccProject_withTags test_terraform_path=/home/runner/work/_temp/d52bcfdd-1092-46f3-b235-9e0bc163766d/terraform
2026-06-02T01:12:19.2835032Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-06-02T01:12:19.2835827Z         
2026-06-02T01:12:19.2836359Z         Error: error when destroying resource
2026-06-02T01:12:19.2836874Z         
2026-06-02T01:12:19.2837538Z         error deleting project (6a1e2cd8f41b0149dfde0af4): Delete
2026-06-02T01:12:19.2838622Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1e2cd8f41b0149dfde0af4":
2026-06-02T01:12:19.2839507Z         dial tcp 3.228.247.77:443: i/o timeout
2026-06-02T01:12:19.2840070Z --- FAIL: TestAccProject_withTags (279.77s)
```

- 2026-06-03 PASS 41 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 37 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 39 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
