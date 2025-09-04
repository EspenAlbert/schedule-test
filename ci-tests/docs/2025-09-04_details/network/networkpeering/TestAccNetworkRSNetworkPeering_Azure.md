# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-20 00:39](#error-2025-08-20t0039260000) |  | dev | 518.01s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2025-09-01 13:53](#error-2025-09-01t1353540000) |  | dev | 519.06s
[2025-09-04 00:38](#error-2025-09-04t0038370000) |  | dev | 509.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 minutes
- 2025-08-07 PASS 7 minutes
- 2025-08-08 PASS 5 minutes
- 2025-08-09 PASS 5 minutes
- 2025-08-10 PASS 4 minutes
- 2025-08-11 PASS 6 minutes
- 2025-08-12 PASS 4 minutes
- 2025-08-13 PASS 5 minutes
- 2025-08-14 PASS 5 minutes
- 2025-08-15 PASS 4 minutes
- 2025-08-16 PASS 5 minutes
- 2025-08-17 PASS 5 minutes
- 2025-08-18 PASS 5 minutes
- 2025-08-19 PASS 5 minutes
- 2025-08-20
  - FAIL 8 minutes

### Error 2025-08-20T00:39:26+00:00
```
2025-08-20T00:39:26.2234762Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-08-20T00:39:26.2235553Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-4914579811529318933
2025-08-20T00:39:26.2241300Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-08-20T00:39:26.2251165Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-08-20T00:39:26.2251743Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-08-20T00:39:26.2252182Z         
2025-08-20T00:39:26.2252573Z         Error: peer networking is in a failed state: RETRYABLE
2025-08-20T00:39:26.2252909Z         
2025-08-20T00:39:26.2253260Z           with mongodbatlas_network_peering.test,
2025-08-20T00:39:26.2253936Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-08-20T00:39:26.2254584Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-08-20T00:39:26.2254918Z         
2025-08-20T00:39:26.2258496Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (518.09s)
```

  - PASS 4 minutes
- 2025-08-21 PASS 5 minutes
- 2025-08-22 PASS 4 minutes
- 2025-08-23 PASS 5 minutes
- 2025-08-24 PASS 5 minutes
- 2025-08-25 PASS 5 minutes
- 2025-08-26 PASS 5 minutes
- 2025-08-27 PASS 5 minutes
- 2025-08-28 PASS 5 minutes
- 2025-08-29 PASS 4 minutes
- 2025-08-30 PASS 4 minutes
- 2025-08-31 PASS 4 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5576190Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-09-01T00:42:46.5577443Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-2056717494330961764
2025-09-01T00:42:46.5578407Z     resource_network_peering_test.go:31: 
2025-09-01T00:42:46.5580129Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:42:46.5608073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:42:46.5611720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_network_peering_test.go:31
2025-09-01T00:42:46.5613208Z         	Error:      	Received unexpected error:
2025-09-01T00:42:46.5618199Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5620702Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2025-09-01T00:42:46.5624657Z         	Messages:   	Project creation failed: test-acc-tf-p-2056717494330961764, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5627308Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (0.18s)
```

  - PASS 8 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 4 minutes
  - FAIL 8 minutes

### Error 2025-09-01T13:53:54+00:00
```
2025-09-01T13:53:54.7039339Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-09-01T13:53:54.7040441Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-5715658432650235807
2025-09-01T13:53:54.7075068Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-09-01T13:53:54.7098167Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-09-01T13:53:54.7099169Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-09-01T13:53:54.7099938Z         
2025-09-01T13:53:54.7100680Z         Error: peer networking is in a failed state: RETRYABLE
2025-09-01T13:53:54.7101299Z         
2025-09-01T13:53:54.7101958Z           with mongodbatlas_network_peering.test,
2025-09-01T13:53:54.7103096Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-09-01T13:53:54.7104156Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-09-01T13:53:54.7104731Z         
2025-09-01T13:53:54.7105227Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (519.64s)
```

  - PASS 5 minutes
  - PASS 5 minutes
- 2025-09-02 PASS 5 minutes
- 2025-09-03 PASS 5 minutes
- 2025-09-04

### Error 2025-09-04T00:38:37+00:00
```
2025-09-04T00:38:37.2527147Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-09-04T00:38:37.2527931Z     resource_network_peering_test.go:31: Creating execution project: test-acc-tf-p-3760082049599603768
2025-09-04T00:38:37.2534274Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-09-04T00:38:37.2551234Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-09-04T00:38:37.2551935Z     resource_network_peering_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-09-04T00:38:37.2552401Z         
2025-09-04T00:38:37.2552802Z         Error: peer networking is in a failed state: RETRYABLE
2025-09-04T00:38:37.2553146Z         
2025-09-04T00:38:37.2553512Z           with mongodbatlas_network_peering.test,
2025-09-04T00:38:37.2554316Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-09-04T00:38:37.2554946Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-09-04T00:38:37.2555288Z         
2025-09-04T00:38:37.2555589Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (509.38s)
```
