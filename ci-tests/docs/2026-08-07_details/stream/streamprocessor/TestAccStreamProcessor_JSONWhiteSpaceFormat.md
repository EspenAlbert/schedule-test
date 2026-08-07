# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.04s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.09s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6222190Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-09T01:15:21.6222672Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-7960913013921656860
2026-07-09T01:15:21.6223071Z     resource_test.go:190: 
2026-07-09T01:15:21.6223780Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6225124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6226559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6228014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6229435Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:190
2026-07-09T01:15:21.6230354Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6230776Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6232243Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6233059Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-09T01:15:21.6234410Z         	Messages:   	Project creation failed: test-acc-tf-p-7960913013921656860, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6235329Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (63.61s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7505415Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-11T01:30:51.7506049Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-4280805492207050114
2026-07-11T01:30:51.7506578Z     resource_test.go:190: 
2026-07-11T01:30:51.7507508Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7509524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7511350Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7513176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7515212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:190
2026-07-11T01:30:51.7516461Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7517007Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7519166Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7520303Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-11T01:30:51.7522102Z         	Messages:   	Project creation failed: test-acc-tf-p-4280805492207050114, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7523360Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (62.45s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 4 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 4 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0490725Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-18T01:45:13.0491869Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-6573950967863905169
2026-07-18T01:45:13.0492810Z     resource_test.go:190: 
2026-07-18T01:45:13.0494889Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0498370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0501794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0505508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0509015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:190
2026-07-18T01:45:13.0511227Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:45:13.0512189Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0516142Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0518084Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-18T01:45:13.0521381Z         	Messages:   	Project creation failed: test-acc-tf-p-6573950967863905169, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0523632Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (75.44s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3526450Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-21T00:59:13.3527082Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-4823709770826725179
2026-07-21T00:59:13.3527602Z     resource_test.go:190: 
2026-07-21T00:59:13.3528535Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3530408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3532264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3534301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3536257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:190
2026-07-21T00:59:13.3537513Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3538054Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3540046Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3541172Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-21T00:59:13.3543134Z         	Messages:   	Project creation failed: test-acc-tf-p-4823709770826725179, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3544398Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (62.92s)
```

- 2026-07-22 PASS 3 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6051263Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-23T03:35:04.6051899Z     resource_test.go:190: Creating execution project (1): test-acc-tf-p-1885848031407409868
2026-07-23T03:35:04.6052426Z     resource_test.go:190: 
2026-07-23T03:35:04.6053373Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6055154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6056926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6059041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6061114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:190
2026-07-23T03:35:04.6062337Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T03:35:04.6062889Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6065701Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6067106Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-07-23T03:35:04.6069695Z         	Messages:   	Project creation failed: test-acc-tf-p-1885848031407409868, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6071241Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (1.89s)
```

- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0203135Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-08-03T01:33:30.0215175Z   
2026-08-03T01:33:30.0215808Z     resource_test.go:195: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-08-03T01:33:30.0216261Z         
2026-08-03T01:33:30.0227129Z         Error: error fetching resource
2026-08-03T01:33:30.0227525Z         
2026-08-03T01:33:30.0227970Z           with data.mongodbatlas_stream_connection.sample,
2026-08-03T01:33:30.0228736Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-08-03T01:33:30.0229444Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-08-03T01:33:30.0229835Z         
2026-08-03T01:33:30.0230084Z         Get
2026-08-03T01:33:30.0231042Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/connections/sample_stream_solar":
2026-08-03T01:33:30.0231861Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0232287Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (5.16s)
```

  - PASS 3 seconds
  - PASS 3 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 4 seconds
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
