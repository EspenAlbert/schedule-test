# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 31) FAIL(x 9)
Success rate: 77.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 11:48](#error-2025-10-01t1148420000) |  | dev |  | 8169.05s
[2025-10-05 00:29](#error-2025-10-05t0029540000) |  | qa |  | 4.09s
[2025-10-07 00:27](#error-2025-10-07t0027520000) |  | dev |  | 10804.09s
[2025-10-17 00:29](#error-2025-10-17t0029390000) |  | dev |  | 10804.07s
[2025-10-20 10:26](#error-2025-10-20t1026390000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters | dev | out_of_capacity | 3.07s
[2025-10-25 00:28](#error-2025-10-25t0028040000) |  | dev |  | 10803.06s
[2025-10-26 00:30](#error-2025-10-26t0030040000) |  | qa |  | 10804.05s
[2025-10-27 00:30](#error-2025-10-27t0030460000) |  | dev |  | 10291.08s
[2025-10-30 00:28](#error-2025-10-30t0028240000) |  | dev |  | 10803.05s

## Timeline
- 2025-09-30 PASS 44 minutes
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
- 2025-10-23 PASS an hour
- 2025-10-24 PASS an hour
- 2025-10-25

### Error 2025-10-25T00:28:04+00:00
```
2025-10-25T00:28:04.7990371Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-25T00:29:40.3496645Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-25T03:29:43.9313792Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-25T03:29:43.9314526Z     resource_test.go:1074: Step 1/4 error: Error running apply: exit status 1
2025-10-25T03:29:43.9315091Z         
2025-10-25T03:29:43.9315501Z         Error: Error in create
2025-10-25T03:29:43.9315769Z         
2025-10-25T03:29:43.9316221Z           with mongodbatlas_advanced_cluster.test,
2025-10-25T03:29:43.9317004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-25T03:29:43.9317757Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-25T03:29:43.9318298Z         
2025-10-25T03:29:43.9318849Z         cluster=test-acc-tf-c-6418993383416589674 didn't reach desired state: IDLE,
2025-10-25T03:29:43.9319342Z         error: context deadline exceeded
2025-10-25T03:29:43.9784810Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10803.63s)
```

- 2025-10-26

### Error 2025-10-26T00:30:04+00:00
```
2025-10-26T00:30:04.0380724Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-26T00:31:28.3838219Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-26T03:31:32.7919499Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-26T03:31:32.7920414Z     resource_test.go:1074: Step 1/4 error: Error running apply: exit status 1
2025-10-26T03:31:32.7920863Z         
2025-10-26T03:31:32.7921211Z         Error: Error in create
2025-10-26T03:31:32.7921453Z         
2025-10-26T03:31:32.7922074Z           with mongodbatlas_advanced_cluster.test,
2025-10-26T03:31:32.7922806Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-26T03:31:32.7923481Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-26T03:31:32.7923965Z         
2025-10-26T03:31:32.7924571Z         cluster=test-acc-tf-c-9007168252166814225 didn't reach desired state: IDLE,
2025-10-26T03:31:32.7925047Z         error: context deadline exceeded
2025-10-26T03:31:32.8387807Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10804.46s)
```

- 2025-10-27

### Error 2025-10-27T00:30:46+00:00
```
2025-10-27T00:30:46.9421257Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-27T00:32:21.7383935Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-27T03:20:50.7632557Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-27T03:20:50.7633117Z     resource_test.go:1074: Step 1/4 error: Error running apply: exit status 1
2025-10-27T03:20:50.7633594Z         
2025-10-27T03:20:50.7634017Z         Error: Provider produced inconsistent result after apply
2025-10-27T03:20:50.7634501Z         
2025-10-27T03:20:50.7634961Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-27T03:20:50.7635601Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-27T03:20:50.7636037Z         unexpected new value:
2025-10-27T03:20:50.7636560Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-10-27T03:20:50.7637102Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-27T03:20:50.7637704Z         
2025-10-27T03:20:50.7638475Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-27T03:20:50.7638896Z         issue tracker.
2025-10-27T03:20:50.7639131Z         
2025-10-27T03:20:50.7639514Z         Error: Provider produced inconsistent result after apply
2025-10-27T03:20:50.7639845Z         
2025-10-27T03:20:50.7640285Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-27T03:20:50.7640933Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-27T03:20:50.7641378Z         unexpected new value:
2025-10-27T03:20:50.7641902Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-10-27T03:20:50.7642444Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-27T03:20:50.7642753Z         
2025-10-27T03:20:50.7643219Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-27T03:20:50.7643636Z         issue tracker.
2025-10-27T03:20:50.7643876Z         
2025-10-27T03:20:50.7644263Z         Error: Provider produced inconsistent result after apply
2025-10-27T03:20:50.7644597Z         
2025-10-27T03:20:50.7645043Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-27T03:20:50.7645686Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-27T03:20:50.7646122Z         unexpected new value:
2025-10-27T03:20:50.7646647Z         .replication_specs[1].region_configs[0].analytics_specs.instance_size: was
2025-10-27T03:20:50.7647183Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-27T03:20:50.7647671Z         
2025-10-27T03:20:50.7648132Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-27T03:20:50.7648546Z         issue tracker.
2025-10-27T03:20:50.7648771Z         
2025-10-27T03:20:50.7649152Z         Error: Provider produced inconsistent result after apply
2025-10-27T03:20:50.7649485Z         
2025-10-27T03:20:50.7649924Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-27T03:20:50.7650561Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-27T03:20:50.7650997Z         unexpected new value:
2025-10-27T03:20:50.7651507Z         .replication_specs[1].region_configs[0].electable_specs.instance_size: was
2025-10-27T03:20:50.7652040Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-27T03:20:50.7652346Z         
2025-10-27T03:20:50.7652954Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-27T03:20:50.7653363Z         issue tracker.
2025-10-27T03:20:50.7653583Z         
2025-10-27T03:20:50.7653958Z         Error: Provider produced inconsistent result after apply
2025-10-27T03:20:50.7654283Z         
2025-10-27T03:20:50.7654721Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-27T03:20:50.7655396Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-27T03:20:50.7655948Z         unexpected new value:
2025-10-27T03:20:50.7656463Z         .replication_specs[1].region_configs[0].read_only_specs.instance_size: was
2025-10-27T03:20:50.7656993Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-27T03:20:50.7657484Z         
2025-10-27T03:20:50.7658005Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-27T03:20:50.7658412Z         issue tracker.
2025-10-27T03:20:50.7658634Z         
2025-10-27T03:20:50.7659018Z         Error: Provider produced inconsistent result after apply
2025-10-27T03:20:50.7660785Z         
2025-10-27T03:20:50.7661649Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-10-27T03:20:50.7662718Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-27T03:20:50.7663453Z         unexpected new value:
2025-10-27T03:20:50.7664342Z         .replication_specs[1].region_configs[1].read_only_specs.instance_size: was
2025-10-27T03:20:50.7665252Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-10-27T03:20:50.7665745Z         
2025-10-27T03:20:50.7666398Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-27T03:20:50.7666840Z         issue tracker.
2025-10-27T03:23:53.5007434Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10291.78s)
```

- 2025-10-28 PASS 49 minutes
- 2025-10-29 PASS an hour
- 2025-10-30

### Error 2025-10-30T00:28:24+00:00
```
2025-10-30T00:28:24.3482911Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-30T00:29:52.4637381Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-30T03:29:55.9180340Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-10-30T03:29:55.9181231Z     resource_test.go:1074: Step 1/4 error: Error running apply: exit status 1
2025-10-30T03:29:55.9182103Z         
2025-10-30T03:29:55.9182507Z         Error: Error in create
2025-10-30T03:29:55.9182892Z         
2025-10-30T03:29:55.9183236Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:29:55.9183880Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:29:55.9184463Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:29:55.9184892Z         
2025-10-30T03:29:55.9185347Z         cluster=test-acc-tf-c-7054213157015212896 didn't reach desired state: IDLE,
2025-10-30T03:29:55.9185803Z         error: context deadline exceeded
2025-10-30T03:29:55.9705283Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10803.51s)
```
