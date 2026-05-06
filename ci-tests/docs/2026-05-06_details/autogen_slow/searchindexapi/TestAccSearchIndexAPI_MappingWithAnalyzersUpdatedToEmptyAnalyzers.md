# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:31](#error-2026-04-09t0131160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.02s
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters | dev | out_of_capacity | 0.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 16 minutes
- 2026-04-08 PASS 21 minutes
- 2026-04-09

### Error 2026-04-09T01:31:16+00:00
```
2026-04-09T01:31:16.5550083Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-04-09T01:31:16.5550754Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-143735973496689426
2026-04-09T01:31:16.5551247Z     resource_test.go:71: 
2026-04-09T01:31:16.5552140Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:31:16.5554262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:31:16.5556281Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:31:16.5558072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-09T01:31:16.5559951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-04-09T01:31:16.5561141Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T01:31:16.5561656Z         	Error:      	Received unexpected error:
2026-04-09T01:31:16.5563564Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5564751Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-04-09T01:31:16.5566978Z         	Messages:   	Project creation failed: test-acc-tf-p-143735973496689426, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5568287Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (68.17s)
```

- 2026-04-10 PASS 15 minutes
- 2026-04-11 PASS 19 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 16 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 17 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.3961750Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-04-16T00:52:02.3962248Z     resource_test.go:71: Creating execution cluster: test-acc-tf-c-7616984063950148271
2026-04-16T00:52:02.3962600Z     resource_test.go:71: 
2026-04-16T00:52:02.3963283Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:02.3964797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:02.3966206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:71
2026-04-16T00:52:02.3966807Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.3968679Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3969721Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-04-16T00:52:02.3971500Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7616984063950148271, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3972655Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (0.63s)
```

- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 22 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 19 minutes
- 2026-04-21 PASS 15 minutes
- 2026-04-22 PASS 17 minutes
- 2026-04-23 PASS 16 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 16 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 4 minutes
- 2026-04-30 PASS 20 minutes
- 2026-05-01 PASS 17 minutes
- 2026-05-02 PASS 24 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05 PASS 16 minutes
- 2026-05-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 23 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 20 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 23 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 19 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 35 minutes
- 2026-05-04 PASS 31 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 27 minutes
