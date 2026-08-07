# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.00s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6168627Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-07-09T01:15:21.6169164Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-3381332433882650101
2026-07-09T01:15:21.6169617Z     resource_stream_instance_test.go:45: 
2026-07-09T01:15:21.6170345Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6171692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6173046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6174653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-07-09T01:15:21.6175336Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6176908Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6177764Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-07-09T01:15:21.6179128Z         	Messages:   	Project creation failed: test-acc-tf-p-3381332433882650101, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6180050Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (68.37s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11 PASS 7 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 3 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 3 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 4 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3453300Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-07-21T00:59:13.3454029Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-2236414888314504628
2026-07-21T00:59:13.3454629Z     resource_stream_instance_test.go:45: 
2026-07-21T00:59:13.3455605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3457474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3459338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3461404Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-07-21T00:59:13.3462294Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3464412Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3465549Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-07-21T00:59:13.3467419Z         	Messages:   	Project creation failed: test-acc-tf-p-2236414888314504628, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3468701Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (85.01s)
```

- 2026-07-22 PASS 3 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.5941119Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-07-23T03:35:04.5942254Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-2902649527622132866
2026-07-23T03:35:04.5943222Z     resource_stream_instance_test.go:45: 
2026-07-23T03:35:04.5944815Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.5947993Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.5951057Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.5954442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-07-23T03:35:04.5955955Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.5959367Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5961322Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-07-23T03:35:04.5964325Z         	Messages:   	Project creation failed: test-acc-tf-p-2902649527622132866, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5966350Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (61.65s)
```

- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 3 seconds
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
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
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
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
