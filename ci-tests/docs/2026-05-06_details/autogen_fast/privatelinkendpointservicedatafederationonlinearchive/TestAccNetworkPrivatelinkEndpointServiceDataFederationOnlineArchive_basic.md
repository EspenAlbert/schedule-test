# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic Test Details
# Found 26 TestRuns in dev, qa from 2026-04-14 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:02](#error-2026-04-30t0102360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 23 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 22 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 25 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 24 seconds
- 2026-04-23 PASS 32 seconds
- 2026-04-24 PASS 23 seconds
- 2026-04-25 PASS 40 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 23 seconds
- 2026-04-28 PASS 27 seconds
- 2026-04-29 PASS 23 seconds
- 2026-04-30

### Error 2026-04-30T01:02:36+00:00
```
2026-04-30T01:02:36.0889830Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-04-30T01:02:36.0891668Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-1062809200777548539
2026-04-30T01:02:36.0892406Z     resource_test.go:40: 
2026-04-30T01:02:36.0893887Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:02:36.0895816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:02:36.0897525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:02:36.0899719Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:40
2026-04-30T01:02:36.0900856Z         	Error:      	Received unexpected error:
2026-04-30T01:02:36.0902698Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0903958Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-04-30T01:02:36.0905773Z         	Messages:   	Project creation failed: test-acc-tf-p-1062809200777548539, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:02:36.0907114Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (67.95s)
```

- 2026-05-01 PASS 23 seconds
- 2026-05-02 PASS 29 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 seconds
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 23 seconds

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
- 2026-04-19 PASS 22 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 24 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 24 seconds
- 2026-05-04 PASS 23 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 24 seconds
