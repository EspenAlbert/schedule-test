# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAWS Test Details
# Found 27 TestRuns in dev, qa from 2026-02-14 to 2026-03-06 from master branch: 1 unique tests, PASS(x 26) FAIL
Success rate: 96.30%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-05 00:51](#error-2026-03-05t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14 PASS 3 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 3 minutes
- 2026-02-17
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-02-18 PASS 3 minutes
- 2026-02-19 PASS 4 minutes
- 2026-02-20 PASS 3 minutes
- 2026-02-21 PASS 3 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 minutes
- 2026-02-24 PASS 7 minutes
- 2026-02-25 PASS 4 minutes
- 2026-02-26 PASS 4 minutes
- 2026-02-27 PASS 4 minutes
- 2026-02-28 PASS 4 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-03-03 PASS 3 minutes
- 2026-03-04 PASS 3 minutes
- 2026-03-05

### Error 2026-03-05T00:51:48+00:00
```
2026-03-05T00:51:48.7824238Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-03-05T00:51:48.7829123Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-4524286423019124936
2026-03-05T00:51:48.7830072Z     resource_test.go:24: 
2026-03-05T00:51:48.7831729Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-05T00:51:48.7835210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-05T00:51:48.7838970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-05T00:51:48.7842475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:30
2026-03-05T00:51:48.7846280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:24
2026-03-05T00:51:48.7848513Z         	            				/opt/hostedtoolcache/go/1.26.0/x64/src/runtime/asm_amd64.s:1771
2026-03-05T00:51:48.7849443Z         	Error:      	Received unexpected error:
2026-03-05T00:51:48.7852947Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:51:48.7855069Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-03-05T00:51:48.7858380Z         	Messages:   	Project creation failed: test-acc-tf-p-4524286423019124936, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:51:48.7860533Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (63.02s)
```

- 2026-03-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 3 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 3 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 3 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 3 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
