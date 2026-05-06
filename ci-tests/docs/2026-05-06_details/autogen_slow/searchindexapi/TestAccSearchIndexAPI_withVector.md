# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters | dev | out_of_capacity | 0.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 9 minutes
- 2026-04-08 PASS 7 minutes
- 2026-04-09 PASS 11 minutes
- 2026-04-10 PASS 2 minutes
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 5 minutes
- 2026-04-14 PASS 6 minutes
- 2026-04-15 PASS 9 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.3995426Z === RUN   TestAccSearchIndexAPI_withVector
2026-04-16T00:52:02.3995838Z     resource_test.go:141: Creating execution cluster: test-acc-tf-c-1517893168930551708
2026-04-16T00:52:02.3996192Z     resource_test.go:141: 
2026-04-16T00:52:02.3996859Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:02.3998170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:02.3999572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-04-16T00:52:02.4000164Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.4002019Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.4002926Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-04-16T00:52:02.4004659Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1517893168930551708, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.4005704Z --- FAIL: TestAccSearchIndexAPI_withVector (0.67s)
```

- 2026-04-17 PASS 17 minutes
- 2026-04-18 PASS 13 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 7 minutes
- 2026-04-21 PASS 12 minutes
- 2026-04-22 PASS 12 minutes
- 2026-04-23 PASS 12 minutes
- 2026-04-24 PASS 7 minutes
- 2026-04-25 PASS 5 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 13 minutes
- 2026-04-28 PASS 11 minutes
- 2026-04-29 PASS 2 minutes
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 15 minutes
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 minutes
- 2026-05-05 PASS 10 minutes
- 2026-05-06 PASS 7 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 11 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 13 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 11 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 12 minutes
- 2026-05-04 PASS 11 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 minutes
