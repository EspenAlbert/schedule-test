# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:36](#error-2026-04-09t0136130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-04-11 01:13](#error-2026-04-11t0113150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 53 seconds
- 2026-04-08 PASS 4 seconds
- 2026-04-09

### Error 2026-04-09T01:36:13+00:00
```
2026-04-09T01:36:13.0190587Z === RUN   TestAccStreamRSStreamInstance_basic
2026-04-09T01:36:13.0191471Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-2602229746219658256
2026-04-09T01:36:13.0192213Z     resource_stream_instance_test.go:18: 
2026-04-09T01:36:13.0193216Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:36:13.0195147Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:36:13.0197343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:36:13.0199608Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-04-09T01:36:13.0200494Z         	Error:      	Received unexpected error:
2026-04-09T01:36:13.0202422Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0203491Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-04-09T01:36:13.0205255Z         	Messages:   	Project creation failed: test-acc-tf-p-2602229746219658256, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0206448Z --- FAIL: TestAccStreamRSStreamInstance_basic (70.81s)
```

- 2026-04-10 PASS 4 seconds
- 2026-04-11

### Error 2026-04-11T01:13:15+00:00
```
2026-04-11T01:13:15.9839330Z === RUN   TestAccStreamRSStreamInstance_basic
2026-04-11T01:13:15.9840479Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-5980399989289325923
2026-04-11T01:13:15.9841476Z     resource_stream_instance_test.go:18: 
2026-04-11T01:13:15.9843345Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:15.9846638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:15.9850154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:15.9853831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-04-11T01:13:15.9855338Z         	Error:      	Received unexpected error:
2026-04-11T01:13:15.9859072Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9860897Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-04-11T01:13:15.9864052Z         	Messages:   	Project creation failed: test-acc-tf-p-5980399989289325923, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9866109Z --- FAIL: TestAccStreamRSStreamInstance_basic (62.18s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 4 seconds
- 2026-04-14 PASS 6 seconds
- 2026-04-15 PASS 3 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 3 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 seconds
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
2026-04-30T01:31:46.2763692Z === RUN   TestAccStreamRSStreamInstance_basic
2026-04-30T01:31:46.2764339Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-5526678364625639787
2026-04-30T01:31:46.2764911Z     resource_stream_instance_test.go:18: 
2026-04-30T01:31:46.2765857Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2767649Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2769439Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2771430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-04-30T01:31:46.2772424Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2774349Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2775388Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-04-30T01:31:46.2777151Z         	Messages:   	Project creation failed: test-acc-tf-p-5526678364625639787, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2778465Z --- FAIL: TestAccStreamRSStreamInstance_basic (85.27s)
```

  - PASS 5 seconds
- 2026-05-01 PASS 3 seconds
- 2026-05-02 PASS 4 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 seconds
- 2026-05-05 PASS 7 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 seconds
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
  - PASS 4 seconds
- 2026-05-05 PASS 2 seconds
- 2026-05-06 PASS 3 seconds
