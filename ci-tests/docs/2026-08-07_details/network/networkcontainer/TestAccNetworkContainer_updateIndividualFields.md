# network/networkcontainer/TestAccNetworkContainer_updateIndividualFields Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:55](#error-2026-07-09t0055240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:55:24+00:00
```
2026-07-09T00:55:24.1898013Z === RUN   TestAccNetworkContainer_updateIndividualFields
2026-07-09T00:55:24.1898750Z     resource_network_container_test.go:130: Creating execution project (1): test-acc-tf-p-5700493635220460189
2026-07-09T00:55:24.1899570Z     resource_network_container_test.go:130: 
2026-07-09T00:55:24.1900558Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:55:24.1902392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:55:24.1904235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:55:24.1906354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:130
2026-07-09T00:55:24.1907269Z         	Error:      	Received unexpected error:
2026-07-09T00:55:24.1909538Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:24.1910723Z         	Test:       	TestAccNetworkContainer_updateIndividualFields
2026-07-09T00:55:24.1912569Z         	Messages:   	Project creation failed: test-acc-tf-p-5700493635220460189, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:24.1913843Z --- FAIL: TestAccNetworkContainer_updateIndividualFields (66.53s)
```

- 2026-07-10 PASS 2 minutes
- 2026-07-11 PASS 2 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 2 minutes
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS 2 minutes
- 2026-07-16 PASS 2 minutes
- 2026-07-17 PASS 2 minutes
- 2026-07-18 PASS 2 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.4876272Z === RUN   TestAccNetworkContainer_updateIndividualFields
2026-07-21T00:51:26.4877023Z     resource_network_container_test.go:130: Creating execution project (1): test-acc-tf-p-4585123298498318629
2026-07-21T00:51:26.4877670Z     resource_network_container_test.go:130: 
2026-07-21T00:51:26.4878682Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:51:26.4880584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:51:26.4882479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:51:26.4884935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:130
2026-07-21T00:51:26.4885879Z         	Error:      	Received unexpected error:
2026-07-21T00:51:26.4887921Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4889085Z         	Test:       	TestAccNetworkContainer_updateIndividualFields
2026-07-21T00:51:26.4890973Z         	Messages:   	Project creation failed: test-acc-tf-p-4585123298498318629, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4892284Z --- FAIL: TestAccNetworkContainer_updateIndividualFields (63.73s)
```

- 2026-07-22 PASS 2 minutes
- 2026-07-23 PASS 2 minutes
- 2026-07-24 PASS 2 minutes
- 2026-07-25 PASS 2 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 minutes
- 2026-07-28 PASS 2 minutes
- 2026-07-29 PASS 2 minutes
- 2026-07-30 PASS 2 minutes
- 2026-07-31 PASS 2 minutes
- 2026-08-01 PASS 2 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 minutes
- 2026-08-04 PASS 2 minutes
- 2026-08-05 PASS 2 minutes
- 2026-08-06 PASS 2 minutes
- 2026-08-07 PASS 2 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
