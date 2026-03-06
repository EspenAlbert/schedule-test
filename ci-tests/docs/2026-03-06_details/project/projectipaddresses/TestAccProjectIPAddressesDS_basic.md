# project/projectipaddresses/TestAccProjectIPAddressesDS_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-05 00:44](#error-2026-03-05t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 3 seconds
- 2026-02-06 PASS 3 seconds
- 2026-02-07 PASS 4 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 3 seconds
- 2026-02-10 PASS 5 seconds
- 2026-02-11 PASS 3 seconds
- 2026-02-12 PASS 3 seconds
- 2026-02-13 PASS 3 seconds
- 2026-02-14 PASS 3 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 3 seconds
- 2026-02-17 PASS 3 seconds
- 2026-02-18 PASS 3 seconds
- 2026-02-19 PASS 3 seconds
- 2026-02-20 PASS 3 seconds
- 2026-02-21 PASS 4 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 4 seconds
- 2026-02-24 PASS 5 seconds
- 2026-02-25 PASS 5 seconds
- 2026-02-26 PASS 3 seconds
- 2026-02-27 PASS 3 seconds
- 2026-02-28 PASS 5 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 3 seconds
- 2026-03-03 PASS 23 seconds
- 2026-03-04 PASS 3 seconds
- 2026-03-05

### Error 2026-03-05T00:44:19+00:00
```
2026-03-05T00:44:19.7069640Z === RUN   TestAccProjectIPAddressesDS_basic
2026-03-05T00:44:19.7070310Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-2923313878646791938
2026-03-05T00:44:19.7070874Z     data_source_test.go:13: 
2026-03-05T00:44:19.7072305Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-05T00:44:19.7074291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-05T00:44:19.7076300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-05T00:44:19.7078466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-03-05T00:44:19.7079310Z         	Error:      	Received unexpected error:
2026-03-05T00:44:19.7081260Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:44:19.7082330Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-03-05T00:44:19.7084102Z         	Messages:   	Project creation failed: test-acc-tf-p-2923313878646791938, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:44:19.7085306Z --- FAIL: TestAccProjectIPAddressesDS_basic (63.90s)
```

- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 3 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 3 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 3 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 3 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 2 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 3 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
