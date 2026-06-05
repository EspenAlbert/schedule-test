# search_deployment/searchdeployment/TestAccSearchDeployment_timeoutTest Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.09s
[2026-05-18 01:00](#error-2026-05-18t0100260000) |  | dev | timeout | 4302.06s
[2026-05-21 01:03](#error-2026-05-21t0103540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s
[2026-05-22 01:00](#error-2026-05-22t0100560000) |  | dev | timeout | 4011.06s
[2026-05-27 01:02](#error-2026-05-27t0102380000) |  | dev | timeout | 4955.08s
[2026-05-30 01:01](#error-2026-05-30t0101320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.09s
[2026-06-01 01:08](#error-2026-06-01t0108570000) |  | dev | timeout | 4366.03s
[2026-06-04 01:15](#error-2026-06-04t0115030000) |  | dev | timeout | 3950.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 2 hours
- 2026-05-08 PASS an hour
- 2026-05-09

### Error 2026-05-09T00:56:07+00:00
```
2026-05-09T00:56:07.4128482Z === RUN   TestAccSearchDeployment_timeoutTest
2026-05-09T00:57:25.3016620Z     shared_resource.go:160: 
2026-05-09T00:57:25.3018983Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:57:25.3022993Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T00:57:25.3025399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T00:57:25.3026775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T00:57:25.3028240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T00:57:25.3029657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-05-09T00:57:25.3030663Z         	Error:      	Received unexpected error:
2026-05-09T00:57:25.3032138Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:25.3032928Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-05-09T00:57:25.3034237Z         	Messages:   	Project creation failed: test-acc-tf-p-1346522737740161203, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:25.3035084Z --- FAIL: TestAccSearchDeployment_timeoutTest (77.89s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS an hour
- 2026-05-12 PASS an hour
- 2026-05-13 PASS an hour
- 2026-05-14 PASS 2 hours
- 2026-05-15 PASS an hour
- 2026-05-16 PASS 48 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:26+00:00
```
2026-05-18T01:00:26.2161106Z === RUN   TestAccSearchDeployment_timeoutTest
2026-05-18T01:00:26.5150247Z === CONT  TestAccSearchDeployment_timeoutTest
2026-05-18T02:03:34.1750744Z === NAME  TestAccSearchDeployment_timeoutTest
2026-05-18T02:03:34.1754126Z     resource_test.go:104: 
2026-05-18T02:03:34.1755424Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:104
2026-05-18T02:03:34.1757655Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing_new.go:171
2026-05-18T02:03:34.1760044Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:1021
2026-05-18T02:03:34.1761520Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-18T02:03:34.1762145Z         	Error:      	Received unexpected error:
2026-05-18T02:03:34.1763231Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'UPDATING', timeout: 30m0s)
2026-05-18T02:03:34.1763961Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-05-18T02:12:08.7776812Z --- FAIL: TestAccSearchDeployment_timeoutTest (4302.56s)
```

- 2026-05-19 PASS 54 minutes
- 2026-05-20 PASS an hour
- 2026-05-21

### Error 2026-05-21T01:03:54+00:00
```
2026-05-21T01:03:54.8141363Z === RUN   TestAccSearchDeployment_timeoutTest
2026-05-21T01:05:07.9933179Z     shared_resource.go:160: 
2026-05-21T01:05:07.9940320Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:07.9943214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-21T01:05:07.9944970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-21T01:05:07.9946709Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-21T01:05:07.9948349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-21T01:05:07.9952116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-05-21T01:05:07.9955470Z         	Error:      	Received unexpected error:
2026-05-21T01:05:07.9958899Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:07.9959987Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-05-21T01:05:07.9961648Z         	Messages:   	Project creation failed: test-acc-tf-p-7620877708764462637, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:07.9963609Z --- FAIL: TestAccSearchDeployment_timeoutTest (73.18s)
```

- 2026-05-22

### Error 2026-05-22T01:00:56+00:00
```
2026-05-22T01:00:56.7251347Z === RUN   TestAccSearchDeployment_timeoutTest
2026-05-22T01:00:57.0116347Z === CONT  TestAccSearchDeployment_timeoutTest
2026-05-22T01:44:35.3331299Z === NAME  TestAccSearchDeployment_timeoutTest
2026-05-22T01:44:35.3333738Z     resource_test.go:95: 
2026-05-22T01:44:35.3334756Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:95
2026-05-22T01:44:35.3336505Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing_new.go:171
2026-05-22T01:44:35.3338215Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:1021
2026-05-22T01:44:35.3339830Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-22T01:44:35.3340404Z         	Error:      	Received unexpected error:
2026-05-22T01:44:35.3341412Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'UPDATING', timeout: 30m0s)
2026-05-22T01:44:35.3342103Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-05-22T02:07:48.3433021Z --- FAIL: TestAccSearchDeployment_timeoutTest (4011.62s)
```

- 2026-05-23 PASS an hour
- 2026-05-24: MISSING
- 2026-05-25 PASS an hour
- 2026-05-26 PASS 56 minutes
- 2026-05-27

### Error 2026-05-27T01:02:38+00:00
```
2026-05-27T01:02:38.5638477Z === RUN   TestAccSearchDeployment_timeoutTest
2026-05-27T01:02:38.7521141Z === CONT  TestAccSearchDeployment_timeoutTest
2026-05-27T02:07:01.4595860Z === NAME  TestAccSearchDeployment_timeoutTest
2026-05-27T02:07:01.4596424Z     resource_test.go:95: 
2026-05-27T02:07:01.4599888Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:95
2026-05-27T02:07:01.4602310Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing_new.go:171
2026-05-27T02:07:01.4604610Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:1021
2026-05-27T02:07:01.4606373Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-27T02:07:01.4607157Z         	Error:      	Received unexpected error:
2026-05-27T02:07:01.4608188Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'UPDATING', timeout: 30m0s)
2026-05-27T02:07:01.4608771Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-05-27T02:25:14.3493001Z --- FAIL: TestAccSearchDeployment_timeoutTest (4955.78s)
```

- 2026-05-28 PASS an hour
- 2026-05-29 PASS an hour
- 2026-05-30

### Error 2026-05-30T01:01:32+00:00
```
2026-05-30T01:01:32.6779025Z === RUN   TestAccSearchDeployment_timeoutTest
2026-05-30T01:02:53.5903373Z     shared_resource.go:160: 
2026-05-30T01:02:53.5909646Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:53.5912873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:02:53.5915054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:02:53.5916920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:02:53.5918637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:02:53.5920527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:76
2026-05-30T01:02:53.5921670Z         	Error:      	Received unexpected error:
2026-05-30T01:02:53.5925624Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:53.5927726Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-05-30T01:02:53.5931398Z         	Messages:   	Project creation failed: test-acc-tf-p-4095742332416767522, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:53.5932755Z --- FAIL: TestAccSearchDeployment_timeoutTest (80.91s)
```

- 2026-05-31: MISSING
- 2026-06-01

### Error 2026-06-01T01:08:57+00:00
```
2026-06-01T01:08:57.6539909Z === RUN   TestAccSearchDeployment_timeoutTest
2026-06-01T01:08:57.9244162Z === CONT  TestAccSearchDeployment_timeoutTest
2026-06-01T02:05:37.6752558Z === NAME  TestAccSearchDeployment_timeoutTest
2026-06-01T02:05:37.6755551Z     resource_test.go:95: 
2026-06-01T02:05:37.6757183Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:95
2026-06-01T02:05:37.6760031Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing_new.go:171
2026-06-01T02:05:37.6762297Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:1021
2026-06-01T02:05:37.6763775Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-01T02:05:37.6764541Z         	Error:      	Received unexpected error:
2026-06-01T02:05:37.6765882Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'UPDATING', timeout: 30m0s)
2026-06-01T02:05:37.6766763Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-06-01T02:21:43.9931724Z --- FAIL: TestAccSearchDeployment_timeoutTest (4366.34s)
```

- 2026-06-02 PASS 54 minutes
- 2026-06-03 PASS an hour
- 2026-06-04

### Error 2026-06-04T01:15:03+00:00
```
2026-06-04T01:15:03.6557128Z === RUN   TestAccSearchDeployment_timeoutTest
2026-06-04T01:15:03.6568690Z === CONT  TestAccSearchDeployment_timeoutTest
2026-06-04T01:37:46.7040494Z   diagnostic_detail=
2026-06-04T01:37:46.7044344Z    diagnostic_severity=ERROR
2026-06-04T02:07:46.7095114Z     resource_test.go:95: 
2026-06-04T02:07:46.7096755Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:95
2026-06-04T02:07:46.7098966Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing_new.go:171
2026-06-04T02:07:46.7101134Z         	            				/home/runner/go/pkg/mod/github.com/hashicorp/terraform-plugin-testing@v1.16.0/helper/resource/testing.go:1021
2026-06-04T02:07:46.7103117Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-04T02:07:46.7103967Z         	Error:      	Received unexpected error:
2026-06-04T02:07:46.7105065Z         	            	timeout while waiting for state to become 'DELETED' (last state: 'UPDATING', timeout: 30m0s)
2026-06-04T02:07:46.7105749Z         	Test:       	TestAccSearchDeployment_timeoutTest
2026-06-04T02:20:54.0567286Z --- FAIL: TestAccSearchDeployment_timeoutTest (3950.65s)
```

- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS an hour
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS an hour
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 58 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 54 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
