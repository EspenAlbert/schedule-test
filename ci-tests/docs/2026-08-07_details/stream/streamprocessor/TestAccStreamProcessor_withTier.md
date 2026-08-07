# stream/streamprocessor/TestAccStreamProcessor_withTier Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.06s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6208805Z === RUN   TestAccStreamProcessor_withTier
2026-07-09T01:15:21.6209256Z     resource_test.go:97: Creating execution project (1): test-acc-tf-p-8094963093587646857
2026-07-09T01:15:21.6209651Z     resource_test.go:97: 
2026-07-09T01:15:21.6210355Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6211706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6213065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6214426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6215936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:97
2026-07-09T01:15:21.6216868Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6217292Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6218750Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6219530Z         	Test:       	TestAccStreamProcessor_withTier
2026-07-09T01:15:21.6220859Z         	Messages:   	Project creation failed: test-acc-tf-p-8094963093587646857, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6221859Z --- FAIL: TestAccStreamProcessor_withTier (77.65s)
```

- 2026-07-10 PASS 12 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7485967Z === RUN   TestAccStreamProcessor_withTier
2026-07-11T01:30:51.7487032Z     resource_test.go:97: Creating execution project (1): test-acc-tf-p-3177326350519448202
2026-07-11T01:30:51.7487920Z     resource_test.go:97: 
2026-07-11T01:30:51.7489511Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7491357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7493176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7494997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7496897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:97
2026-07-11T01:30:51.7498126Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7498826Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7500771Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7501833Z         	Test:       	TestAccStreamProcessor_withTier
2026-07-11T01:30:51.7503606Z         	Messages:   	Project creation failed: test-acc-tf-p-3177326350519448202, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7504814Z --- FAIL: TestAccStreamProcessor_withTier (62.93s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 12 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 10 seconds
- 2026-07-16 PASS 17 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0457322Z === RUN   TestAccStreamProcessor_withTier
2026-07-18T01:45:13.0458350Z     resource_test.go:97: Creating execution project (1): test-acc-tf-p-3572384609066690960
2026-07-18T01:45:13.0459273Z     resource_test.go:97: 
2026-07-18T01:45:13.0460993Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0464770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0468209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0471793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0475546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:97
2026-07-18T01:45:13.0477784Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:45:13.0478736Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0482478Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0484633Z         	Test:       	TestAccStreamProcessor_withTier
2026-07-18T01:45:13.0487917Z         	Messages:   	Project creation failed: test-acc-tf-p-3572384609066690960, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0489980Z --- FAIL: TestAccStreamProcessor_withTier (62.18s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3508068Z === RUN   TestAccStreamProcessor_withTier
2026-07-21T00:59:13.3508655Z     resource_test.go:97: Creating execution project (1): test-acc-tf-p-3659359186021430523
2026-07-21T00:59:13.3509165Z     resource_test.go:97: 
2026-07-21T00:59:13.3510102Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3511977Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3514099Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3515964Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3517905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:97
2026-07-21T00:59:13.3519156Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3519701Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3521698Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3522886Z         	Test:       	TestAccStreamProcessor_withTier
2026-07-21T00:59:13.3524810Z         	Messages:   	Project creation failed: test-acc-tf-p-3659359186021430523, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3526035Z --- FAIL: TestAccStreamProcessor_withTier (62.55s)
```

- 2026-07-22 PASS 11 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6029996Z === RUN   TestAccStreamProcessor_withTier
2026-07-23T03:35:04.6030940Z     resource_test.go:97: Creating execution project (1): test-acc-tf-p-2683800728481364251
2026-07-23T03:35:04.6031753Z     resource_test.go:97: 
2026-07-23T03:35:04.6033439Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6036462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6039123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6040916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6042804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:97
2026-07-23T03:35:04.6044039Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T03:35:04.6044588Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6046548Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6047807Z         	Test:       	TestAccStreamProcessor_withTier
2026-07-23T03:35:04.6049651Z         	Messages:   	Project creation failed: test-acc-tf-p-2683800728481364251, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6050829Z --- FAIL: TestAccStreamProcessor_withTier (61.44s)
```

- 2026-07-24 PASS 11 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 18 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 8 seconds
- 2026-07-30 PASS 8 seconds
- 2026-07-31 PASS 9 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0183687Z === RUN   TestAccStreamProcessor_withTier
2026-08-03T01:33:30.0195707Z    test_name=TestAccStreamProcessor_withTier test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform test_working_directory=/tmp/plugintest4045123842 test_step_number=1
2026-08-03T01:33:30.0196817Z     resource_test.go:102: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-08-03T01:33:30.0197260Z         
2026-08-03T01:33:30.0197568Z         Error: error fetching resource
2026-08-03T01:33:30.0197876Z         
2026-08-03T01:33:30.0198345Z           with data.mongodbatlas_stream_connection.sample_stream_solar,
2026-08-03T01:33:30.0199186Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "sample_stream_solar":
2026-08-03T01:33:30.0199955Z           12: 	data "mongodbatlas_stream_connection" "sample_stream_solar" {
2026-08-03T01:33:30.0200351Z         
2026-08-03T01:33:30.0200586Z         Get
2026-08-03T01:33:30.0201530Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/connections/sample_stream_solar":
2026-08-03T01:33:30.0202344Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0202723Z --- FAIL: TestAccStreamProcessor_withTier (5.16s)
```

  - PASS 10 seconds
  - PASS 9 seconds
- 2026-08-04 PASS 10 seconds
- 2026-08-05 PASS 33 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 16 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 13 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 16 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 10 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
