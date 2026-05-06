# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:44](#error-2026-04-11t0044180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s
[2026-04-16 00:51](#error-2026-04-16t0051520000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032a81ec945fedc7287b5/clusters | dev | out_of_capacity | 57.01s
[2026-04-17 00:48](#error-2026-04-17t0048480000) |  | dev | timeout | 11531.00s
[2026-04-18 00:45](#error-2026-04-18t0045390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-04-21 00:50](#error-2026-04-21t0050220000) |  | dev | timeout | 11701.07s
[2026-05-06 00:51](#error-2026-05-06t0051050000) |  | dev | timeout | 5536.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 57 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11

### Error 2026-04-11T00:44:18+00:00
```
2026-04-11T00:44:18.2725351Z === RUN   TestAccSearchDeployment_timeoutTest
2026-04-11T00:45:31.7346257Z     shared_resource.go:160: 
2026-04-11T00:45:31.7350031Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:31.7352243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-11T00:45:31.7354500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-11T00:45:31.7356451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-11T00:45:31.7358630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-11T00:45:31.7360684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-04-11T00:45:31.7361816Z         	Error:      	Received unexpected error:
2026-04-11T00:45:31.7363862Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:31.7364918Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-04-11T00:45:31.7366641Z         	Messages:   	Project creation failed: test-acc-tf-p-5618461562191072789, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:31.7367805Z --- FAIL: TestAccSearchDeployment_timeoutTest (73.46s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS an hour
- 2026-04-14 PASS an hour
- 2026-04-15 PASS an hour
- 2026-04-16

### Error 2026-04-16T00:51:52+00:00
```
2026-04-16T00:51:52.2344953Z === RUN   TestAccSearchDeployment_timeoutTest
2026-04-16T00:52:48.2909671Z === CONT  TestAccSearchDeployment_timeoutTest
2026-04-16T00:52:49.2553205Z === NAME  TestAccSearchDeployment_timeoutTest
2026-04-16T00:52:49.2553883Z     resource_test.go:82: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T00:52:49.2554383Z         
2026-04-16T00:52:49.2554891Z         Error: Error in create
2026-04-16T00:52:49.2555340Z         
2026-04-16T00:52:49.2555799Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:52:49.2556481Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:52:49.2557104Z           13: resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:52:49.2557417Z         
2026-04-16T00:52:49.2557836Z         cluster name: test-acc-tf-c-1988342897287431809, API error details:
2026-04-16T00:52:49.2558541Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032a81ec945fedc7287b5/clusters
2026-04-16T00:52:49.2559245Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:52:49.2559911Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:52:49.2560418Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:49.3023734Z --- FAIL: TestAccSearchDeployment_timeoutTest (57.07s)
```

- 2026-04-17

### Error 2026-04-17T00:48:48+00:00
```
2026-04-17T00:48:48.8010139Z === RUN   TestAccSearchDeployment_timeoutTest
2026-04-17T00:48:49.8803502Z === CONT  TestAccSearchDeployment_timeoutTest
2026-04-17T01:00:59.4404656Z === NAME  TestAccSearchDeployment_timeoutTest
2026-04-17T01:00:59.4405212Z     resource_test.go:82: Step 1/6, expected an error but got none
2026-04-17T04:00:38.4957862Z   
2026-04-17T04:00:59.8103641Z === NAME  TestAccSearchDeployment_timeoutTest
2026-04-17T04:00:59.8104328Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-17T04:00:59.8104801Z         
2026-04-17T04:00:59.8105142Z         Error: error during search deployment delete
2026-04-17T04:00:59.8105450Z         
2026-04-17T04:00:59.8105897Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-17T04:00:59.8106338Z         timeout: 3h0m0s)
2026-04-17T04:00:59.8106649Z --- FAIL: TestAccSearchDeployment_timeoutTest (11531.01s)
```

- 2026-04-18

### Error 2026-04-18T00:45:39+00:00
```
2026-04-18T00:45:39.5784216Z === RUN   TestAccSearchDeployment_timeoutTest
2026-04-18T00:46:44.9167281Z     shared_resource.go:160: 
2026-04-18T00:46:44.9169989Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:46:44.9173962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-18T00:46:44.9177007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-18T00:46:44.9178882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-18T00:46:44.9181187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-18T00:46:44.9183469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-04-18T00:46:44.9184285Z         	Error:      	Received unexpected error:
2026-04-18T00:46:44.9186264Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:46:44.9187360Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-04-18T00:46:44.9189159Z         	Messages:   	Project creation failed: test-acc-tf-p-7315950817124237608, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:46:44.9190379Z --- FAIL: TestAccSearchDeployment_timeoutTest (65.34s)
```

- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21

### Error 2026-04-21T00:50:22+00:00
```
2026-04-21T00:50:22.9885091Z === RUN   TestAccSearchDeployment_timeoutTest
2026-04-21T00:51:10.6115821Z === CONT  TestAccSearchDeployment_timeoutTest
2026-04-21T01:05:24.2007586Z === NAME  TestAccSearchDeployment_timeoutTest
2026-04-21T01:05:24.2008134Z     resource_test.go:82: Step 1/6, expected an error but got none
2026-04-21T04:05:24.6946066Z   
2026-04-21T04:05:24.6946594Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-21T04:05:24.6947060Z         
2026-04-21T04:05:24.6947400Z         Error: error during search deployment delete
2026-04-21T04:05:24.6947708Z         
2026-04-21T04:05:24.6948163Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-21T04:05:24.6948601Z         timeout: 3h0m0s)
2026-04-21T04:05:24.6948913Z --- FAIL: TestAccSearchDeployment_timeoutTest (11701.71s)
```

- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS an hour
- 2026-04-25 PASS 55 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS an hour
- 2026-04-28 PASS an hour
- 2026-04-29 PASS an hour
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 59 minutes
- 2026-05-02 PASS 51 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05 PASS an hour
- 2026-05-06

### Error 2026-05-06T00:51:05+00:00
```
2026-05-06T00:51:05.4653035Z === RUN   TestAccSearchDeployment_timeoutTest
2026-05-06T00:51:05.6441390Z === CONT  TestAccSearchDeployment_timeoutTest
2026-05-06T01:55:33.4150913Z === NAME  TestAccSearchDeployment_timeoutTest
2026-05-06T01:55:33.4151820Z     resource_test.go:104: 
2026-05-06T01:55:33.4154344Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:104
2026-05-06T01:55:33.4158540Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing_new.go:171
2026-05-06T01:55:33.4161410Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:1021
2026-05-06T01:55:33.4163580Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-06T01:55:33.4164232Z         	Error:      	Received unexpected error:
2026-05-06T01:55:33.4165729Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'UPDATING', timeout: 30m0s)
2026-05-06T01:55:33.4166501Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-05-06T02:23:21.5568696Z --- FAIL: TestAccSearchDeployment_timeoutTest (5536.09s)
```


## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 53 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 53 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 54 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 58 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 57 minutes
- 2026-05-04
  - PASS 53 minutes
  - PASS 48 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 49 minutes
