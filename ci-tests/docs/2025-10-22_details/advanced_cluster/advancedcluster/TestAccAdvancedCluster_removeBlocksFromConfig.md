# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 38) FAIL(x 6)
Success rate: 86.36%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-29 00:29](#error-2025-09-29t0029080000) |  | dev |  | 4856.08s
[2025-10-01 11:48](#error-2025-10-01t1148420000) |  | dev |  | 8169.05s
[2025-10-05 00:29](#error-2025-10-05t0029540000) |  | qa |  | 4.09s
[2025-10-07 00:27](#error-2025-10-07t0027520000) |  | dev |  | 10804.09s
[2025-10-17 00:29](#error-2025-10-17t0029390000) |  | dev |  | 10804.07s
[2025-10-20 10:26](#error-2025-10-20t1026390000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters | dev | out_of_capacity | 3.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS an hour
- 2025-09-24 PASS an hour
- 2025-09-25 PASS an hour
- 2025-09-26 PASS an hour
- 2025-09-27 PASS 55 minutes
- 2025-09-28 PASS 52 minutes
- 2025-09-29
  - FAIL an hour

### Error 2025-09-29T00:29:08+00:00
```
2025-09-29T00:29:08.1728527Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-29T00:30:21.8343045Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-29T01:47:14.6231212Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-09-29T01:47:14.6231758Z     resource_test.go:1084: Step 1/4 error: Error running apply: exit status 1
2025-09-29T01:47:14.6232127Z         
2025-09-29T01:47:14.6232504Z         Error: Provider produced inconsistent result after apply
2025-09-29T01:47:14.6232836Z         
2025-09-29T01:47:14.6233266Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-29T01:47:14.6234109Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T01:47:14.6234560Z         unexpected new value:
2025-09-29T01:47:14.6235061Z         .replication_specs[1].region_configs[0].read_only_specs.instance_size: was
2025-09-29T01:47:14.6235588Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-29T01:47:14.6235893Z         
2025-09-29T01:47:14.6236346Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T01:47:14.6236739Z         issue tracker.
2025-09-29T01:47:14.6236953Z         
2025-09-29T01:47:14.6237322Z         Error: Provider produced inconsistent result after apply
2025-09-29T01:47:14.6237635Z         
2025-09-29T01:47:14.6238058Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-29T01:47:14.6238673Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T01:47:14.6239093Z         unexpected new value:
2025-09-29T01:47:14.6239586Z         .replication_specs[1].region_configs[0].electable_specs.instance_size: was
2025-09-29T01:47:14.6240460Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-29T01:47:14.6240813Z         
2025-09-29T01:47:14.6241256Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T01:47:14.6241655Z         issue tracker.
2025-09-29T01:47:14.6241865Z         
2025-09-29T01:47:14.6242227Z         Error: Provider produced inconsistent result after apply
2025-09-29T01:47:14.6242537Z         
2025-09-29T01:47:14.6242958Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-29T01:47:14.6250925Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T01:47:14.6251415Z         unexpected new value:
2025-09-29T01:47:14.6251931Z         .replication_specs[1].region_configs[1].read_only_specs.instance_size: was
2025-09-29T01:47:14.6252452Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-09-29T01:47:14.6252754Z         
2025-09-29T01:47:14.6253207Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T01:47:14.6253611Z         issue tracker.
2025-09-29T01:51:18.5111502Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (4856.79s)
```

  - PASS 46 minutes
- 2025-09-30
  - PASS 51 minutes
  - PASS 47 minutes
  - PASS 46 minutes
  - PASS 52 minutes
  - PASS 44 minutes
- 2025-10-01
  - PASS 2 hours
  - PASS an hour
  - PASS 56 minutes
  - PASS an hour
  - PASS an hour
  - PASS 54 minutes
  - FAIL 2 hours

### Error 2025-10-01T11:48:42+00:00
```
2025-10-01T11:48:42.0650016Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-01T11:50:16.3187640Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-01T14:02:51.1853148Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-01T14:02:51.1853890Z     resource_test.go:1084: Step 1/4 error: Error running apply: exit status 1
2025-10-01T14:02:51.1854466Z         
2025-10-01T14:02:51.1854847Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1855174Z         
2025-10-01T14:02:51.1855627Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1856249Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1856669Z         unexpected new value:
2025-10-01T14:02:51.1857167Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-10-01T14:02:51.1857679Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1858339Z         
2025-10-01T14:02:51.1859186Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1859941Z         issue tracker.
2025-10-01T14:02:51.1860188Z         
2025-10-01T14:02:51.1860824Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1861164Z         
2025-10-01T14:02:51.1861596Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1862223Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1862657Z         unexpected new value:
2025-10-01T14:02:51.1863157Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-10-01T14:02:51.1863674Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1863981Z         
2025-10-01T14:02:51.1864424Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1864822Z         issue tracker.
2025-10-01T14:02:51.1865036Z         
2025-10-01T14:02:51.1865403Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1865719Z         
2025-10-01T14:02:51.1866137Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1866750Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1867167Z         unexpected new value:
2025-10-01T14:02:51.1867656Z         .replication_specs[1].region_configs[0].read_only_specs.instance_size: was
2025-10-01T14:02:51.1868171Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1868469Z         
2025-10-01T14:02:51.1868914Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1869315Z         issue tracker.
2025-10-01T14:02:51.1869533Z         
2025-10-01T14:02:51.1869902Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1870222Z         
2025-10-01T14:02:51.1871031Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1871728Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1872141Z         unexpected new value:
2025-10-01T14:02:51.1872632Z         .replication_specs[1].region_configs[0].analytics_specs.instance_size: was
2025-10-01T14:02:51.1873140Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1873439Z         
2025-10-01T14:02:51.1874047Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1874448Z         issue tracker.
2025-10-01T14:02:51.1874659Z         
2025-10-01T14:02:51.1875018Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1875334Z         
2025-10-01T14:02:51.1875765Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1876369Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1876787Z         unexpected new value:
2025-10-01T14:02:51.1877285Z         .replication_specs[1].region_configs[0].electable_specs.instance_size: was
2025-10-01T14:02:51.1877792Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1878205Z         
2025-10-01T14:02:51.1878640Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1879030Z         issue tracker.
2025-10-01T14:02:51.1879248Z         
2025-10-01T14:02:51.1879611Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:02:51.1888092Z         
2025-10-01T14:02:51.1888652Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-01T14:02:51.1889423Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:02:51.1889961Z         unexpected new value:
2025-10-01T14:02:51.1890672Z         .replication_specs[1].region_configs[1].read_only_specs.instance_size: was
2025-10-01T14:02:51.1891199Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-01T14:02:51.1891619Z         
2025-10-01T14:02:51.1892070Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:02:51.1892590Z         issue tracker.
2025-10-01T14:06:25.8353124Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (8169.53s)
```

  - PASS 46 minutes
- 2025-10-02 PASS 55 minutes
- 2025-10-03 PASS 2 hours
- 2025-10-04 PASS 59 minutes
- 2025-10-05

### Error 2025-10-05T00:29:54+00:00
```
2025-10-05T00:29:54.0355632Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-05T00:31:26.4143966Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-05T00:31:30.9668818Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-05T00:31:30.9672547Z     resource_test.go:1084: Step 1/4 error: Error running apply: exit status 1
2025-10-05T00:31:30.9675466Z         
2025-10-05T00:31:30.9786470Z         Error: Error in create
2025-10-05T00:31:30.9787067Z         
2025-10-05T00:31:30.9787666Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.9788795Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.9789839Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.9790346Z         
2025-10-05T00:31:30.9791024Z         cluster name: test-acc-tf-c-4108305287858613605, API error details:
2025-10-05T00:31:30.9792245Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfffec65822ddfca6a0/clusters
2025-10-05T00:31:30.9793095Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.9793942Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.9795105Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.9796096Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.9796763Z         BadRequestDetail: 
2025-10-05T00:31:31.3035606Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (4.91s)
```

- 2025-10-06 PASS 56 minutes
- 2025-10-07

### Error 2025-10-07T00:27:52+00:00
```
2025-10-07T00:27:52.3797129Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-07T00:30:14.9652051Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-07T03:30:19.8247948Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-07T03:30:19.8248898Z     resource_test.go:1084: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:30:19.8249586Z         
2025-10-07T03:30:19.8250073Z         Error: Error in create
2025-10-07T03:30:19.8250542Z         
2025-10-07T03:30:19.8251126Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:19.8251801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:19.8252440Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:19.8253035Z         
2025-10-07T03:30:19.8253529Z         cluster=test-acc-tf-c-4508217409270556280 didn't reach desired state: IDLE,
2025-10-07T03:30:19.8254018Z         error: context deadline exceeded
2025-10-07T03:30:19.8763903Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.93s)
```

- 2025-10-08 PASS 50 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 54 minutes
- 2025-10-11 PASS 57 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS an hour
- 2025-10-14 PASS 49 minutes
- 2025-10-15 PASS 52 minutes
- 2025-10-16 PASS 58 minutes
- 2025-10-17

### Error 2025-10-17T00:29:39+00:00
```
2025-10-17T00:29:39.7306555Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-17T00:31:20.6764884Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-17T03:31:25.2572847Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-17T03:31:25.2573500Z     resource_test.go:1084: Step 1/4 error: Error running apply: exit status 1
2025-10-17T03:31:25.2573967Z         
2025-10-17T03:31:25.2574334Z         Error: Error in create
2025-10-17T03:31:25.2574761Z         
2025-10-17T03:31:25.2575315Z           with mongodbatlas_advanced_cluster.test,
2025-10-17T03:31:25.2576484Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-17T03:31:25.2577465Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-17T03:31:25.2577871Z         
2025-10-17T03:31:25.2578417Z         cluster=test-acc-tf-c-4834637793802964273 didn't reach desired state: IDLE,
2025-10-17T03:31:25.2579297Z         error: context deadline exceeded
2025-10-17T03:31:25.3032998Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.65s)
```

- 2025-10-18 PASS 46 minutes
- 2025-10-19 PASS 51 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 3 seconds

### Error 2025-10-20T10:26:39+00:00
```
2025-10-20T10:26:39.5474273Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-20T10:28:27.7307070Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-20T10:28:31.3296527Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-20T10:28:31.3297107Z     resource_test.go:1074: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:28:31.3297558Z         
2025-10-20T10:28:31.3297821Z         Error: Error in create
2025-10-20T10:28:31.3298079Z         
2025-10-20T10:28:31.3298419Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:31.3299075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:31.3299680Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:31.3300042Z         
2025-10-20T10:28:31.3300485Z         cluster name: test-acc-tf-c-6089595758908078245, API error details:
2025-10-20T10:28:31.3301501Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters
2025-10-20T10:28:31.3302376Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:31.3303048Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:31.3303550Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:31.3901700Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (3.66s)
```

- 2025-10-21 PASS 48 minutes
- 2025-10-22
  - PASS 53 minutes
  - PASS 46 minutes