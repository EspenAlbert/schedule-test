# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-14 00:49](#error-2026-07-14t0049230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 116.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 6 minutes
- 2026-07-10 PASS 4 minutes
- 2026-07-11 PASS 4 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 4 minutes
- 2026-07-14

### Error 2026-07-14T00:49:23+00:00
```
2026-07-14T00:49:23.6170991Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-07-14T00:49:23.6172194Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-2547109340808136526
2026-07-14T00:49:23.6173271Z     resource_test.go:31: 
2026-07-14T00:49:23.6175444Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:49:23.6177693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:49:23.6180235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:49:23.6182491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_test.go:31
2026-07-14T00:49:23.6183476Z         	Error:      	Received unexpected error:
2026-07-14T00:49:23.6186037Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:49:23.6187377Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2026-07-14T00:49:23.6189606Z         	Messages:   	Project creation failed: test-acc-tf-p-2547109340808136526, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:49:23.6191004Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (63.49s)
```

- 2026-07-15 PASS 4 minutes
- 2026-07-16 PASS 4 minutes
- 2026-07-17 PASS 4 minutes
- 2026-07-18 PASS 5 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.4895048Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-07-21T00:51:26.4895683Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6612543044350566697
2026-07-21T00:51:26.4896229Z     resource_test.go:31: 
2026-07-21T00:51:26.4897195Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:51:26.4899102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:51:26.4900996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:51:26.4902968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_test.go:31
2026-07-21T00:51:26.4904031Z         	Error:      	Received unexpected error:
2026-07-21T00:51:26.4906063Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4907171Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2026-07-21T00:51:26.4909170Z         	Messages:   	Project creation failed: test-acc-tf-p-6612543044350566697, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4910456Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (116.50s)
```

- 2026-07-22 PASS 4 minutes
- 2026-07-23 PASS 8 minutes
- 2026-07-24 PASS 4 minutes
- 2026-07-25 PASS 4 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 minutes
- 2026-07-28 PASS 4 minutes
- 2026-07-29 PASS 4 minutes
- 2026-07-30 PASS 5 minutes
- 2026-07-31 PASS 6 minutes
- 2026-08-01 PASS 5 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 minutes
- 2026-08-04 PASS 4 minutes
- 2026-08-05 PASS 4 minutes
- 2026-08-06 PASS 4 minutes
- 2026-08-07 PASS 4 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 5 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 minutes
  - PASS 5 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
