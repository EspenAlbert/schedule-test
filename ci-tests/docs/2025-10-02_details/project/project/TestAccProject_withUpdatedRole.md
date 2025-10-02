# project/project/TestAccProject_withUpdatedRole Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:56](#error-2025-09-08t0956230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea3360cddbf4f6e4a5780/limits | qa | flaky_500 | 76.02s
[2025-09-14 01:13](#error-2025-09-14t0113040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60cb61411d835e95b5d81/limits | qa | flaky_500 | 35.08s
[2025-09-15 07:06](#error-2025-09-15t0706190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b0b9fe60767b7f9b3750/limits | qa | flaky_500 | 34.05s
[2025-09-21 00:45](#error-2025-09-21t0045180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf47495ccc8c441718c6d6/limits | qa | flaky_500 | 35.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 11 seconds
- 2025-09-06 PASS 13 seconds
- 2025-09-07 PASS 17 seconds
- 2025-09-08
  - PASS 9 seconds
  - FAIL a minute

### Error 2025-09-08T09:56:23+00:00
```
2025-09-08T09:56:23.5759993Z === RUN   TestAccProject_withUpdatedRole
2025-09-08T09:56:23.5769933Z === CONT  TestAccProject_withUpdatedRole
2025-09-08T09:56:23.5844758Z === NAME  TestAccProject_withUpdatedRole
2025-09-08T09:56:23.5845344Z     resource_project_test.go:762: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-08T09:56:23.5845985Z         
2025-09-08T09:56:23.5846381Z         Error: error when getting project properties after create
2025-09-08T09:56:23.5846719Z         
2025-09-08T09:56:23.5847016Z           with mongodbatlas_project.test,
2025-09-08T09:56:23.5847593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:56:23.5848146Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:56:23.5848438Z         
2025-09-08T09:56:23.5848876Z         error getting project (68bea3360cddbf4f6e4a5780): error getting project's
2025-09-08T09:56:23.5849335Z         limits (68bea3360cddbf4f6e4a5780):
2025-09-08T09:56:23.5849914Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea3360cddbf4f6e4a5780/limits
2025-09-08T09:56:23.5850574Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:56:23.5851150Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:56:23.5851546Z         BadRequestDetail: 
2025-09-08T09:56:23.5851844Z --- FAIL: TestAccProject_withUpdatedRole (76.20s)
```

  - PASS 10 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 10 seconds
- 2025-09-11 PASS 15 seconds
- 2025-09-12 PASS 15 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T01:13:04+00:00
```
2025-09-14T01:13:04.9760496Z === RUN   TestAccProject_withUpdatedRole
2025-09-14T01:13:04.9772231Z === CONT  TestAccProject_withUpdatedRole
2025-09-14T01:13:05.0000742Z === NAME  TestAccProject_withUpdatedRole
2025-09-14T01:13:05.0001282Z     resource_project_test.go:780: Step 1/2 error: Error running apply: exit status 1
2025-09-14T01:13:05.0001690Z         
2025-09-14T01:13:05.0002077Z         Error: error when getting project properties after create
2025-09-14T01:13:05.0002435Z         
2025-09-14T01:13:05.0002735Z           with mongodbatlas_project.test,
2025-09-14T01:13:05.0003344Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T01:13:05.0003916Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T01:13:05.0004220Z         
2025-09-14T01:13:05.0004775Z         error getting project (68c60cb61411d835e95b5d81): error getting project's
2025-09-14T01:13:05.0005257Z         limits (68c60cb61411d835e95b5d81):
2025-09-14T01:13:05.0005855Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60cb61411d835e95b5d81/limits
2025-09-14T01:13:05.0006553Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T01:13:05.0007157Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T01:13:05.0007567Z         BadRequestDetail: 
2025-09-14T01:13:05.0007875Z --- FAIL: TestAccProject_withUpdatedRole (35.81s)
```

- 2025-09-15
  - PASS 10 seconds
  - FAIL 34 seconds

### Error 2025-09-15T07:06:19+00:00
```
2025-09-15T07:06:19.6564151Z === RUN   TestAccProject_withUpdatedRole
2025-09-15T07:06:19.6581575Z === CONT  TestAccProject_withUpdatedRole
2025-09-15T07:06:19.6684052Z === NAME  TestAccProject_withUpdatedRole
2025-09-15T07:06:19.6684571Z     resource_project_test.go:780: Step 1/2 error: Error running apply: exit status 1
2025-09-15T07:06:19.6684961Z         
2025-09-15T07:06:19.6685341Z         Error: error when getting project properties after create
2025-09-15T07:06:19.6685674Z         
2025-09-15T07:06:19.6685972Z           with mongodbatlas_project.test,
2025-09-15T07:06:19.6686561Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T07:06:19.6687100Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T07:06:19.6687398Z         
2025-09-15T07:06:19.6687845Z         error getting project (68c7b0b9fe60767b7f9b3750): error getting project's
2025-09-15T07:06:19.6688308Z         limits (68c7b0b9fe60767b7f9b3750):
2025-09-15T07:06:19.6688914Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b0b9fe60767b7f9b3750/limits
2025-09-15T07:06:19.6689575Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T07:06:19.6690155Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T07:06:19.6690546Z         BadRequestDetail: 
2025-09-15T07:06:19.6690847Z --- FAIL: TestAccProject_withUpdatedRole (34.51s)
```

- 2025-09-16 PASS 16 seconds
- 2025-09-17 PASS 11 seconds
- 2025-09-18 PASS 13 seconds
- 2025-09-19 PASS 14 seconds
- 2025-09-20 PASS 12 seconds
- 2025-09-21

### Error 2025-09-21T00:45:18+00:00
```
2025-09-21T00:45:18.6479358Z === RUN   TestAccProject_withUpdatedRole
2025-09-21T00:45:18.6486807Z === CONT  TestAccProject_withUpdatedRole
2025-09-21T00:45:18.6621287Z === NAME  TestAccProject_withUpdatedRole
2025-09-21T00:45:18.6621777Z     resource_project_test.go:780: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:45:18.6622150Z         
2025-09-21T00:45:18.6622523Z         Error: error when getting project properties after create
2025-09-21T00:45:18.6622839Z         
2025-09-21T00:45:18.6623136Z           with mongodbatlas_project.test,
2025-09-21T00:45:18.6623724Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:45:18.6624262Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:45:18.6624540Z         
2025-09-21T00:45:18.6624972Z         error getting project (68cf47495ccc8c441718c6d6): error getting project's
2025-09-21T00:45:18.6625416Z         limits (68cf47495ccc8c441718c6d6):
2025-09-21T00:45:18.6626389Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf47495ccc8c441718c6d6/limits
2025-09-21T00:45:18.6627040Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:45:18.6627603Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:45:18.6627988Z         BadRequestDetail: 
2025-09-21T00:45:18.6628269Z --- FAIL: TestAccProject_withUpdatedRole (35.73s)
```

- 2025-09-22 PASS 14 seconds
- 2025-09-23 PASS 11 seconds
- 2025-09-24 PASS 14 seconds
- 2025-09-25 PASS 15 seconds
- 2025-09-26 PASS 11 seconds
- 2025-09-27 PASS 13 seconds
- 2025-09-28 PASS 15 seconds
- 2025-09-29 PASS 9 seconds
- 2025-09-30
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 9 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 15 seconds