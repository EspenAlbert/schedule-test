# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:36](#error-2026-04-09t0136130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s
[2026-04-11 01:13](#error-2026-04-11t0113150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.03s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 seconds
- 2026-04-08 PASS 4 seconds
- 2026-04-09

### Error 2026-04-09T01:36:13+00:00
```
2026-04-09T01:36:13.0206881Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-04-09T01:36:13.0207564Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-620124480130781007
2026-04-09T01:36:13.0208149Z     resource_stream_instance_test.go:45: 
2026-04-09T01:36:13.0209213Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:36:13.0211003Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:36:13.0212796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:36:13.0214789Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-04-09T01:36:13.0215642Z         	Error:      	Received unexpected error:
2026-04-09T01:36:13.0217561Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0218942Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-04-09T01:36:13.0220753Z         	Messages:   	Project creation failed: test-acc-tf-p-620124480130781007, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0221988Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (73.51s)
```

- 2026-04-10 PASS 4 seconds
- 2026-04-11

### Error 2026-04-11T01:13:15+00:00
```
2026-04-11T01:13:15.9866825Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-04-11T01:13:15.9867990Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-83370033313532929
2026-04-11T01:13:15.9869197Z     resource_stream_instance_test.go:45: 
2026-04-11T01:13:15.9870877Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:15.9874156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:15.9877427Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:15.9881509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-04-11T01:13:15.9883020Z         	Error:      	Received unexpected error:
2026-04-11T01:13:15.9886528Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9888721Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-04-11T01:13:15.9891914Z         	Messages:   	Project creation failed: test-acc-tf-p-83370033313532929, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9894028Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (82.30s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 4 seconds
- 2026-04-14 PASS 6 seconds
- 2026-04-15 PASS 3 seconds
- 2026-04-16 PASS 6 seconds
- 2026-04-17 PASS 3 seconds
- 2026-04-18 PASS 4 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 seconds
- 2026-04-21 PASS 4 seconds
- 2026-04-22 PASS 3 seconds
- 2026-04-23 PASS 5 seconds
- 2026-04-24 PASS 4 seconds
- 2026-04-25 PASS 5 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 seconds
- 2026-04-28 PASS 5 seconds
- 2026-04-29 PASS 4 seconds
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2778882Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-04-30T01:31:46.2779556Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-5289286884712317314
2026-04-30T01:31:46.2780123Z     resource_stream_instance_test.go:45: 
2026-04-30T01:31:46.2781058Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2783128Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2784920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2786912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-04-30T01:31:46.2787772Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2790135Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2791258Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-04-30T01:31:46.2793425Z         	Messages:   	Project creation failed: test-acc-tf-p-5289286884712317314, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2794689Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (62.34s)
```

  - PASS 5 seconds
- 2026-05-01 PASS 3 seconds
- 2026-05-02 PASS 5 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 seconds
- 2026-05-05 PASS 6 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 4 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 seconds
- 2026-05-04
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-05-05 PASS 3 seconds
- 2026-05-06 PASS 3 seconds
