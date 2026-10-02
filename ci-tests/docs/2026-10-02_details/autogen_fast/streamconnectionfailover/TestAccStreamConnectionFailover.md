# autogen_fast/streamconnectionfailover/TestAccStreamConnectionFailover Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-15 00:49](#error-2026-09-15t0049550000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa8952e5fcf07afdd9d0c4c/streams/test-acc-tf-s-5469803971819339972/connections | dev |  | 4.07s
[2026-09-16 00:49](#error-2026-09-16t0049530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e6c4013d831ec44d41d2/streams/test-acc-tf-s-8897379582675338174/connections | dev |  | 3.03s
[2026-09-17 00:47](#error-2026-09-17t0047210000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | real_test_failure | 4.01s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 55 seconds
- 2026-09-03 PASS 59 seconds
- 2026-09-04
  - PASS 56 seconds
  - PASS 52 seconds
- 2026-09-05 PASS 52 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 51 seconds
- 2026-09-08 PASS 51 seconds
- 2026-09-09 PASS 53 seconds
- 2026-09-10 PASS 53 seconds
- 2026-09-11 PASS 52 seconds
- 2026-09-12 PASS 53 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 55 seconds
- 2026-09-15

### Error 2026-09-15T00:49:55+00:00
```
2026-09-15T00:49:55.0565760Z === RUN   TestAccStreamConnectionFailover
2026-09-15T00:49:55.0566604Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-2143098117833755808
2026-09-15T00:49:55.0583494Z   
2026-09-15T00:49:55.0583980Z     resource_test.go:41: Step 1/4 error: Error running apply: exit status 1
2026-09-15T00:49:55.0584638Z         
2026-09-15T00:49:55.0585011Z         Error: error creating resource
2026-09-15T00:49:55.0585476Z         
2026-09-15T00:49:55.0586129Z           with mongodbatlas_stream_connection.primary,
2026-09-15T00:49:55.0587163Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_stream_connection" "primary":
2026-09-15T00:49:55.0588108Z           27: 		resource "mongodbatlas_stream_connection" "primary" {
2026-09-15T00:49:55.0588581Z         
2026-09-15T00:49:55.0589641Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa8952e5fcf07afdd9d0c4c/streams/test-acc-tf-s-5469803971819339972/connections
2026-09-15T00:49:55.0590983Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T00:49:55.0591932Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T00:49:55.0592861Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T00:49:55.0593454Z --- FAIL: TestAccStreamConnectionFailover (4.71s)
```

- 2026-09-16

### Error 2026-09-16T00:49:53+00:00
```
2026-09-16T00:49:53.6479652Z === RUN   TestAccStreamConnectionFailover
2026-09-16T00:49:53.6480843Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-5938043022706261421
2026-09-16T00:49:53.6507502Z    test_name=TestAccStreamConnectionFailover test_terraform_path=/home/runner/work/_temp/9bccd4ec-dfa5-4fea-a8bd-078ca171f40b/terraform test_working_directory=/tmp/plugintest765424504
2026-09-16T00:49:53.6509411Z     resource_test.go:41: Step 1/4 error: Error running apply: exit status 1
2026-09-16T00:49:53.6510248Z         
2026-09-16T00:49:53.6510881Z         Error: error creating resource
2026-09-16T00:49:53.6511794Z         
2026-09-16T00:49:53.6512627Z           with mongodbatlas_stream_connection.primary,
2026-09-16T00:49:53.6514190Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_stream_connection" "primary":
2026-09-16T00:49:53.6515590Z           27: 		resource "mongodbatlas_stream_connection" "primary" {
2026-09-16T00:49:53.6516285Z         
2026-09-16T00:49:53.6518011Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e6c4013d831ec44d41d2/streams/test-acc-tf-s-8897379582675338174/connections
2026-09-16T00:49:53.6519797Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T00:49:53.6521165Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T00:49:53.6522553Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T00:49:53.6523542Z --- FAIL: TestAccStreamConnectionFailover (3.27s)
```

- 2026-09-17

### Error 2026-09-17T00:47:21+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2026-09-17T00:47:21.220000+00:00-TestAccStreamConnectionFailover',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T00:47:21.2203075Z === RUN   TestAccStreamConnectionFailover
2026-09-17T00:47:21.2203757Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-8564679148855502181
2026-09-17T00:47:21.2220182Z    test_terraform_path=/home/runner/work/_temp/f920df9b-bc5a-416f-8b18-adfddf2874b7/terraform test_working_directory=/tmp/plugintest3685352417 test_step_number=1 test_name=TestAccStreamConnectionFailover
2026-09-17T00:47:21.2221568Z     resource_test.go:41: Step 1/4 error: Error running apply: exit status 1
2026-09-17T00:47:21.2222116Z         
2026-09-17T00:47:21.2222503Z         Error: error creating resource
2026-09-17T00:47:21.2222999Z         
2026-09-17T00:47:21.2223458Z           with mongodbatlas_stream_connection.primary,
2026-09-17T00:47:21.2224549Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_stream_connection" "primary":
2026-09-17T00:47:21.2225337Z           27: 		resource "mongodbatlas_stream_connection" "primary" {
2026-09-17T00:47:21.2225863Z         
2026-09-17T00:47:21.2226785Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab37d5beed1dea3b8392d4/streams/test-acc-tf-s-1373802287635183306/connections
2026-09-17T00:47:21.2228217Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T00:47:21.2229059Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T00:47:21.2230002Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T00:47:21.2230686Z --- FAIL: TestAccStreamConnectionFailover (4.11s)
```

- 2026-09-18 PASS 52 seconds
- 2026-09-19 PASS 50 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 51 seconds
- 2026-09-22 PASS 53 seconds
- 2026-09-23
  - PASS 53 seconds
  - PASS 55 seconds
- 2026-09-24 PASS 54 seconds
- 2026-09-25 PASS 53 seconds
- 2026-09-26 PASS 51 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 56 seconds
- 2026-09-29
  - PASS 53 seconds
  - PASS 51 seconds
- 2026-09-30 PASS 55 seconds
- 2026-10-01 PASS 52 seconds
- 2026-10-02 PASS 54 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 50 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 53 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 54 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 57 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 52 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 57 seconds
  - PASS 59 seconds
  - PASS 57 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
