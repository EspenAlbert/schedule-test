# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters | dev | out_of_capacity | 0.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 8 minutes
- 2026-04-08 PASS 8 minutes
- 2026-04-09 PASS 10 minutes
- 2026-04-10 PASS 10 minutes
- 2026-04-11 PASS 9 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 14 minutes
- 2026-04-14 PASS 6 minutes
- 2026-04-15 PASS 4 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.4017073Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-04-16T00:52:02.4017503Z     resource_test.go:181: Creating execution cluster: test-acc-tf-c-6080286524368504872
2026-04-16T00:52:02.4017862Z     resource_test.go:181: 
2026-04-16T00:52:02.4018538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:02.4019967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:02.4021389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-04-16T00:52:02.4021989Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.4023862Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.4024969Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-04-16T00:52:02.4026575Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6080286524368504872, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.4027630Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.76s)
```

- 2026-04-17 PASS 17 minutes
- 2026-04-18 PASS 13 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 12 minutes
- 2026-04-23 PASS 11 minutes
- 2026-04-24 PASS 13 minutes
- 2026-04-25 PASS 5 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 7 minutes
- 2026-04-28 PASS 15 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30 PASS 4 minutes
- 2026-05-01 PASS 14 minutes
- 2026-05-02 PASS 15 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 14 minutes
- 2026-05-05 PASS 4 minutes
- 2026-05-06 PASS 9 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 7 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 24 minutes
- 2026-05-04 PASS 20 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 minutes
