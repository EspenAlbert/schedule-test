# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4) TIMEOUT
Success rate: 96.52%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-05-24 05:27](#error-2025-05-24t0527390000) |  | dev | timeout | 16332.00s
[2025-05-30 03:30](#error-2025-05-30t0330240000) |  | dev |  | 8875.09s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4e0c939f27413251a7f/clusters | dev | flaky_500 | 7.07s
[2025-06-22 03:04](#error-2025-06-22t0304120000) |  | qa |  | 7332.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 41 minutes
- 2025-04-13 PASS 47 minutes
- 2025-04-14 PASS 38 minutes
- 2025-04-15 PASS 54 minutes
- 2025-04-16
  - PASS 38 minutes
  - PASS 49 minutes
- 2025-04-17 PASS 43 minutes
- 2025-04-18 PASS 43 minutes
- 2025-04-19 PASS 40 minutes
- 2025-04-20 PASS 44 minutes
- 2025-04-21 PASS 42 minutes
- 2025-04-22 PASS 39 minutes
- 2025-04-23 PASS 48 minutes
- 2025-04-24 PASS 39 minutes
- 2025-04-25 PASS 40 minutes
- 2025-04-26 PASS 40 minutes
- 2025-04-27 PASS 53 minutes
- 2025-04-28 PASS 39 minutes
- 2025-04-29 PASS 50 minutes
- 2025-04-30 PASS 42 minutes
- 2025-05-01
  - PASS 38 minutes
  - PASS 42 minutes
  - PASS 39 minutes
  - PASS 51 minutes
  - PASS 38 minutes
  - PASS 43 minutes
  - PASS 39 minutes
- 2025-05-02 PASS 45 minutes
- 2025-05-03 PASS 45 minutes
- 2025-05-04 PASS 44 minutes
- 2025-05-05 PASS 43 minutes
- 2025-05-06 PASS 40 minutes
- 2025-05-07 PASS 41 minutes
- 2025-05-08 PASS 47 minutes
- 2025-05-09 PASS 45 minutes
- 2025-05-10 PASS 41 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.8152382Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-11T00:30:01.8152849Z     shared_resource.go:84: 
2025-05-11T00:30:01.8153830Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8155784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8157854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8159807Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8162213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1387
2025-05-11T00:30:01.8163183Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8164267Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8164938Z         	Test:       	TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-11T00:30:01.8166130Z         	Messages:   	Project creation failed: test-acc-tf-p-1989071289679523235, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8167105Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (0.02s)
```

- 2025-05-12 PASS 47 minutes
- 2025-05-13
  - PASS 42 minutes
  - PASS 37 minutes
- 2025-05-14 PASS 45 minutes
- 2025-05-15 PASS 45 minutes
- 2025-05-16 PASS 43 minutes
- 2025-05-17 PASS 45 minutes
- 2025-05-18 PASS 42 minutes
- 2025-05-19 PASS 38 minutes
- 2025-05-20 PASS 39 minutes
- 2025-05-21
  - PASS 42 minutes
  - PASS 42 minutes
- 2025-05-22 PASS 42 minutes
- 2025-05-23 PASS 42 minutes
- 2025-05-24

### Error 2025-05-24T05:27:39+00:00
```
2025-05-24T05:27:39.5475244Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-24T05:27:39.5506048Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-24T05:27:39.5656854Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-24T05:27:39.5657475Z     resource_advanced_cluster_test.go:1392: Step 3/4 error: Error running apply: exit status 1
2025-05-24T05:27:39.5658014Z         
2025-05-24T05:27:39.5658262Z         Error: Error in update
2025-05-24T05:27:39.5658609Z         
2025-05-24T05:27:39.5658949Z           with mongodbatlas_advanced_cluster.test,
2025-05-24T05:27:39.5659727Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-05-24T05:27:39.5660434Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-05-24T05:27:39.5660755Z         
2025-05-24T05:27:39.5661323Z         cluster=test-acc-tf-c-7150356073296987571 didn't reach desired state: IDLE,
2025-05-24T05:27:39.5662049Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-05-24T05:27:39.5662581Z         'UPDATING', timeout: 3h0m0s)
2025-05-24T05:27:39.5662891Z panic: test timed out after 5h0m0s
2025-05-24T05:27:39.5663159Z 	running tests:
2025-05-24T05:27:39.5662891Z panic: test timed out after 5h0m0s
2025-05-24T05:27:39.5663159Z 	running tests:
2025-05-24T05:27:39.5663596Z 		TestAccAdvancedCluster_removeBlocksFromConfig (4h32m12s)
```

- 2025-05-25 PASS 44 minutes
- 2025-05-26 PASS 44 minutes
- 2025-05-27 PASS 41 minutes
- 2025-05-28
  - PASS 39 minutes
  - PASS 45 minutes
  - PASS 42 minutes
- 2025-05-29 PASS 59 minutes
- 2025-05-30
  - FAIL 2 hours

### Error 2025-05-30T03:30:24+00:00
```
2025-05-30T03:30:24.2334135Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-30T03:30:24.2350588Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-30T03:30:24.2501225Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-30T03:30:24.2501806Z     resource_advanced_cluster_test.go:1392: Step 3/4 error: Error running apply: exit status 1
2025-05-30T03:30:24.2502235Z         
2025-05-30T03:30:24.2502617Z         Error: Provider produced inconsistent result after apply
2025-05-30T03:30:24.2502950Z         
2025-05-30T03:30:24.2503387Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-05-30T03:30:24.2504018Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-05-30T03:30:24.2504640Z         unexpected new value:
2025-05-30T03:30:24.2505153Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-05-30T03:30:24.2505679Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-05-30T03:30:24.2506115Z         
2025-05-30T03:30:24.2506577Z         This is a bug in the provider, which should be reported in the provider's own
2025-05-30T03:30:24.2507121Z         issue tracker.
2025-05-30T03:30:24.2507352Z         
2025-05-30T03:30:24.2507731Z         Error: Provider produced inconsistent result after apply
2025-05-30T03:30:24.2508065Z         
2025-05-30T03:30:24.2508496Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-05-30T03:30:24.2509124Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-05-30T03:30:24.2509554Z         unexpected new value:
2025-05-30T03:30:24.2510057Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-05-30T03:30:24.2510586Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-05-30T03:30:24.2510896Z         
2025-05-30T03:30:24.2511341Z         This is a bug in the provider, which should be reported in the provider's own
2025-05-30T03:30:24.2511754Z         issue tracker.
2025-05-30T03:30:24.2512091Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (8875.92s)
```

  - PASS 40 minutes
- 2025-05-31 PASS 44 minutes
- 2025-06-01
  - PASS 41 minutes
  - PASS 42 minutes
  - PASS 39 minutes
  - PASS 40 minutes
  - PASS 43 minutes
- 2025-06-02
  - PASS 43 minutes
  - PASS 43 minutes
  - PASS 41 minutes
  - PASS 38 minutes
- 2025-06-03 PASS 43 minutes
- 2025-06-04 PASS 43 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5915281Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-05T00:35:38.5938723Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-05T00:35:38.6254405Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-05T00:35:38.6255410Z     resource_advanced_cluster_test.go:1392: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6256119Z         
2025-06-05T00:35:38.6256560Z         Error: Error in create
2025-06-05T00:35:38.6256998Z         
2025-06-05T00:35:38.6257588Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6258956Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6260055Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6260612Z         
2025-06-05T00:35:38.6261383Z         cluster name: test-acc-tf-c-3474047851145015696, API error details:
2025-06-05T00:35:38.6262630Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4e0c939f27413251a7f/clusters
2025-06-05T00:35:38.6263818Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6264812Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6265453Z         BadRequestDetail: 
2025-06-05T00:35:38.6285719Z   
2025-06-05T00:35:38.6384622Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (7.74s)
```

- 2025-06-06 PASS 2 hours
- 2025-06-07 PASS 41 minutes
- 2025-06-08 PASS 44 minutes
- 2025-06-09 PASS an hour
- 2025-06-10 PASS an hour
- 2025-06-11
  - PASS 42 minutes
  - PASS 42 minutes
- 2025-06-12 PASS 44 minutes
- 2025-06-13 PASS 45 minutes
- 2025-06-14 PASS an hour
- 2025-06-15 PASS 45 minutes
- 2025-06-16 PASS an hour
- 2025-06-17 PASS 42 minutes
- 2025-06-18
  - PASS 45 minutes
  - PASS 39 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 42 minutes
- 2025-06-21 PASS 38 minutes
- 2025-06-22

### Error 2025-06-22T03:04:12+00:00
```
2025-06-22T03:04:12.6134268Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-22T03:04:12.6155965Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-22T03:04:12.6410935Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-22T03:04:12.6411527Z     resource_advanced_cluster_test.go:1392: Step 3/4 error: Error running apply: exit status 1
2025-06-22T03:04:12.6411935Z         
2025-06-22T03:04:12.6412301Z         Error: Provider produced inconsistent result after apply
2025-06-22T03:04:12.6412767Z         
2025-06-22T03:04:12.6413193Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-06-22T03:04:12.6413804Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-06-22T03:04:12.6414214Z         unexpected new value:
2025-06-22T03:04:12.6414806Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-06-22T03:04:12.6415316Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-06-22T03:04:12.6415602Z         
2025-06-22T03:04:12.6416037Z         This is a bug in the provider, which should be reported in the provider's own
2025-06-22T03:04:12.6416654Z         issue tracker.
2025-06-22T03:04:12.6416931Z         
2025-06-22T03:04:12.6417361Z         Error: Provider produced inconsistent result after apply
2025-06-22T03:04:12.6417670Z         
2025-06-22T03:04:12.6418212Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-06-22T03:04:12.6418950Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-06-22T03:04:12.6419383Z         unexpected new value:
2025-06-22T03:04:12.6419966Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-06-22T03:04:12.6420591Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-06-22T03:04:12.6420882Z         
2025-06-22T03:04:12.6421432Z         This is a bug in the provider, which should be reported in the provider's own
2025-06-22T03:04:12.6421815Z         issue tracker.
2025-06-22T03:04:12.6422262Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (7332.20s)
```

- 2025-06-23 PASS 43 minutes
- 2025-06-24 PASS 44 minutes
- 2025-06-25 PASS 43 minutes
- 2025-06-26
  - PASS 41 minutes
  - PASS 42 minutes
- 2025-06-27 PASS 41 minutes
- 2025-06-28 PASS 42 minutes
- 2025-06-29 PASS 45 minutes
- 2025-06-30 PASS 38 minutes
- 2025-07-01
  - PASS 47 minutes
  - PASS 41 minutes
  - PASS 47 minutes
  - PASS 41 minutes
  - PASS an hour
- 2025-07-02 PASS 43 minutes
- 2025-07-03 PASS 47 minutes
- 2025-07-04 PASS 46 minutes
- 2025-07-05 PASS 42 minutes
- 2025-07-06 PASS 43 minutes
- 2025-07-07 PASS 40 minutes
- 2025-07-08 PASS an hour
- 2025-07-09 PASS 40 minutes
- 2025-07-10 PASS 42 minutes