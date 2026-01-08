# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:14](#error-2026-01-07t0114180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8710207141892673770 | dev | flaky_500 | 393.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 13 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 15 minutes
- 2025-12-12 PASS 20 minutes
- 2025-12-13 PASS 17 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 minutes
- 2025-12-16 PASS 18 minutes
- 2025-12-17 PASS 17 minutes
- 2025-12-18 PASS 11 minutes
- 2025-12-19 PASS 16 minutes
- 2025-12-20 PASS 17 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 minutes
- 2025-12-23 PASS 14 minutes
- 2025-12-24 PASS 18 minutes
- 2025-12-25 PASS 11 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 22 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 16 minutes
- 2025-12-31 PASS 12 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 18 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 19 minutes
- 2026-01-06 PASS 17 minutes
- 2026-01-07

### Error 2026-01-07T01:14:18+00:00
```
2026-01-07T01:14:18.8400894Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-01-07T01:14:18.8401753Z     resource_test.go:92: Creating execution cluster: test-acc-tf-c-8710207141892673770
2026-01-07T01:14:18.8402232Z 2026/01/07 00:44:06 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:14:18.8402636Z 2026/01/07 00:47:06 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8402999Z 2026/01/07 00:48:07 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8403356Z 2026/01/07 00:48:17 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8403729Z 2026/01/07 00:49:18 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8404091Z 2026/01/07 00:49:28 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8404437Z 2026/01/07 00:50:28 [TRACE] Waiting 10s before next try
2026-01-07T01:14:18.8404791Z     resource_test.go:92: 
2026-01-07T01:14:18.8405656Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:14:18.8407342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:14:18.8409124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:92
2026-01-07T01:14:18.8409896Z         	Error:      	Received unexpected error:
2026-01-07T01:14:18.8412528Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8710207141892673770 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8413820Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-01-07T01:14:18.8415840Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8710207141892673770, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8710207141892673770 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8417265Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (393.67s)
```

- 2026-01-08 PASS 13 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 16 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 15 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 14 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
