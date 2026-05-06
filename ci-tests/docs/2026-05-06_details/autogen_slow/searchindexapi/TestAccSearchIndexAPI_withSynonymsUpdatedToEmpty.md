# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:31](#error-2026-04-09t0131160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.08s
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters | dev | out_of_capacity | 0.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 15 minutes
- 2026-04-08 PASS 17 minutes
- 2026-04-09

### Error 2026-04-09T01:31:16+00:00
```
2026-04-09T01:31:16.5531801Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-04-09T01:31:16.5532461Z     resource_test.go:51: Creating execution project (1): test-acc-tf-p-7645854255885727714
2026-04-09T01:31:16.5532941Z     resource_test.go:51: 
2026-04-09T01:31:16.5533839Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:31:16.5535622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:31:16.5537753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:31:16.5539556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-09T01:31:16.5541435Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-04-09T01:31:16.5542625Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T01:31:16.5543132Z         	Error:      	Received unexpected error:
2026-04-09T01:31:16.5545044Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5546356Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-04-09T01:31:16.5548306Z         	Messages:   	Project creation failed: test-acc-tf-p-7645854255885727714, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5549546Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (73.81s)
```

- 2026-04-10 PASS 3 minutes
- 2026-04-11 PASS 15 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 12 minutes
- 2026-04-14 PASS 12 minutes
- 2026-04-15 PASS 6 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.3950143Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-04-16T00:52:02.3950596Z     resource_test.go:51: Creating execution cluster: test-acc-tf-c-7863208340419453422
2026-04-16T00:52:02.3950964Z     resource_test.go:51: 
2026-04-16T00:52:02.3951644Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:02.3952975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:02.3954925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-04-16T00:52:02.3955532Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.3957433Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3958418Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-04-16T00:52:02.3960022Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7863208340419453422, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3961342Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (0.79s)
```

- 2026-04-17 PASS 7 minutes
- 2026-04-18 PASS 29 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 9 minutes
- 2026-04-21 PASS 7 minutes
- 2026-04-22 PASS 11 minutes
- 2026-04-23 PASS 26 minutes
- 2026-04-24 PASS 15 minutes
- 2026-04-25 PASS 7 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 15 minutes
- 2026-04-28 PASS 16 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30 PASS 32 minutes
- 2026-05-01 PASS 15 minutes
- 2026-05-02 PASS 6 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05 PASS 4 minutes
- 2026-05-06 PASS 16 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 11 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 11 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 13 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 14 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 9 minutes
- 2026-05-04 PASS 11 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 8 minutes
