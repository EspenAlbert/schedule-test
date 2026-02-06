# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 31 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 minutes
- 2026-01-09 PASS 2 minutes
- 2026-01-10 PASS 9 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 8 minutes
- 2026-01-13 PASS a minute
- 2026-01-14 PASS 11 minutes
- 2026-01-15 PASS 11 minutes
- 2026-01-16 PASS 5 minutes
- 2026-01-17 PASS a minute
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 minutes
- 2026-01-20 PASS 5 minutes
- 2026-01-21 PASS 11 minutes
- 2026-01-22 PASS 10 minutes
- 2026-01-23 PASS 7 minutes
- 2026-01-24 PASS 7 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 11 minutes
- 2026-01-28 PASS 12 minutes
- 2026-01-29 PASS 5 minutes
- 2026-01-30 PASS 9 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4530323Z === RUN   TestAccSearchIndexAPI_withVector
2026-02-03T00:42:45.4531399Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-5837314638525631719
2026-02-03T00:42:45.4532196Z     resource_test.go:140: 
2026-02-03T00:42:45.4533782Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4537030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4540630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:140
2026-02-03T00:42:45.4542052Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4546604Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4548945Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-02-03T00:42:45.4552754Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5837314638525631719, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4555183Z --- FAIL: TestAccSearchIndexAPI_withVector (0.42s)
```

- 2026-02-04 PASS 5 minutes
- 2026-02-05 PASS 7 minutes
- 2026-02-06 PASS 7 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 7 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a minute
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 7 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 9 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 11 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 7 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
