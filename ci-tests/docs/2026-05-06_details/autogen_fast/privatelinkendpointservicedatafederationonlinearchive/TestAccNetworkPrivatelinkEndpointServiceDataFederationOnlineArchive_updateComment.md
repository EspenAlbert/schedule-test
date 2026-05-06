# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment Test Details
# Found 26 TestRuns in dev, qa from 2026-04-14 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:02](#error-2026-04-30t0102360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14 PASS 45 seconds
- 2026-04-15 PASS 44 seconds
- 2026-04-16 PASS 45 seconds
- 2026-04-17 PASS 43 seconds
- 2026-04-18 PASS 45 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 46 seconds
- 2026-04-21 PASS 44 seconds
- 2026-04-22 PASS 45 seconds
- 2026-04-23 PASS 46 seconds
- 2026-04-24 PASS 44 seconds
- 2026-04-25 PASS 46 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 43 seconds
- 2026-04-28 PASS 45 seconds
- 2026-04-29 PASS 44 seconds
- 2026-04-30

### Error 2026-04-30T01:02:36+00:00
```
2026-04-30T01:02:36.0907887Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-04-30T01:02:36.0908660Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-2430745491313721557
2026-04-30T01:02:36.0909160Z     resource_test.go:98: 
2026-04-30T01:02:36.0910042Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:02:36.0911936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:02:36.0913637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:02:36.0915744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-04-30T01:02:36.0916718Z         	Error:      	Received unexpected error:
2026-04-30T01:02:36.0918530Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0919808Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-04-30T01:02:36.0921790Z         	Messages:   	Project creation failed: test-acc-tf-p-2430745491313721557, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0923171Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (95.21s)
```

- 2026-05-01 PASS 46 seconds
- 2026-05-02 PASS 46 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 45 seconds
- 2026-05-05 PASS 44 seconds
- 2026-05-06 PASS 43 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 43 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 45 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 43 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 45 seconds
- 2026-05-04 PASS 44 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 45 seconds
