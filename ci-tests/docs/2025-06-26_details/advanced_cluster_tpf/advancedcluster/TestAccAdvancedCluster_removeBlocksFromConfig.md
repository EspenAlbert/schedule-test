# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 39 minutes
```
2025-05-28T02:03:35.3264317Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-28T02:03:35.3290841Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-28T02:03:35.3429526Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2378.28s)
```
#### PASS 45 minutes
```
2025-05-28T12:04:46.9821394Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-28T12:04:46.9848891Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-28T12:04:47.0076714Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2731.94s)
```
#### PASS 42 minutes
```
2025-05-28T13:47:12.0032078Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-28T13:47:12.0044355Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-28T13:47:12.0186929Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2548.65s)
```
### 2025-05-29
#### PASS 59 minutes
```
2025-05-29T02:20:21.7292060Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-29T02:20:21.7301265Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-29T02:20:21.7470516Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (3575.24s)
```
### 2025-05-30
#### FAIL 2 hours
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
#### PASS 40 minutes
```
2025-05-30T08:55:11.7587317Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-30T08:55:11.7601194Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-30T08:55:11.7760241Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2453.40s)
```
### 2025-05-31
#### PASS 44 minutes
```
2025-05-31T04:18:53.2264183Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-31T04:18:53.2275602Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-05-31T04:18:53.2415404Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2646.95s)
```
### 2025-06-01
#### PASS 41 minutes
```
2025-06-01T04:20:15.0555824Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T04:20:15.0571918Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T04:20:15.0719591Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2515.93s)
```
#### PASS 42 minutes
```
2025-06-01T08:29:24.1349228Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T08:29:24.1361148Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T08:29:24.1509019Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2542.76s)
```
#### PASS 39 minutes
```
2025-06-01T12:36:46.3914421Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T12:36:46.3931242Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T12:36:46.4071892Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2361.61s)
```
#### PASS 40 minutes
```
2025-06-01T16:46:33.8342252Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T16:46:33.8359351Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T16:46:33.8502222Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2421.89s)
```
#### PASS 43 minutes
```
2025-06-01T20:56:30.1380498Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T20:56:30.1407676Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-01T20:56:30.1549799Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2607.08s)
```
### 2025-06-02
#### PASS 43 minutes
```
2025-06-02T01:07:47.7506448Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T01:07:47.7515557Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T01:07:47.7752876Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2590.18s)
```
#### PASS 43 minutes
```
2025-06-02T04:19:30.0998621Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T04:19:30.1016070Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T04:19:30.1158551Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2586.24s)
```
#### PASS 41 minutes
```
2025-06-02T05:16:34.1958374Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T05:16:34.1973577Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T05:16:34.2116806Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2515.67s)
```
#### PASS 38 minutes
```
2025-06-02T09:30:51.2609131Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T09:30:51.2624163Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-02T09:30:51.2806105Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2303.56s)
```
### 2025-06-03
#### PASS 43 minutes
```
2025-06-03T02:00:08.0985348Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-03T02:00:08.0995553Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-03T02:00:08.1145973Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2610.74s)
```
### 2025-06-04
#### PASS 43 minutes
```
2025-06-04T01:50:55.4339618Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-04T01:50:55.4352990Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-04T01:50:55.4490454Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2609.97s)
```
### 2025-06-05
#### FAIL 7 seconds
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
### 2025-06-06
#### PASS 2 hours
```
2025-06-06T05:30:18.8798255Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-06T05:30:18.8817246Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-06T05:30:18.9058598Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (7658.39s)
```
### 2025-06-07
#### PASS 41 minutes
```
2025-06-07T01:49:34.5072997Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-07T01:49:34.5090644Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-07T01:49:34.5221344Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2501.01s)
```
### 2025-06-08
#### PASS 44 minutes
```
2025-06-08T01:48:59.8885323Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-08T01:48:59.8918234Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-08T01:48:59.9045661Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2662.51s)
```
### 2025-06-09
#### PASS an hour
```
2025-06-09T04:06:35.6368022Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-09T04:06:35.6391177Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-09T04:06:35.6516617Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (4268.98s)
```
### 2025-06-10
#### PASS an hour
```
2025-06-10T02:43:46.9824221Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-10T02:43:46.9848494Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-10T02:43:46.9983792Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (3768.65s)
```
### 2025-06-11
#### PASS 42 minutes
```
2025-06-11T01:51:36.5527154Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-11T01:51:36.5537053Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-11T01:51:36.5678020Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2544.85s)
```
#### PASS 42 minutes
```
2025-06-11T09:05:12.3254792Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-11T09:05:12.3270436Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-11T09:05:12.3520978Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2524.11s)
```
### 2025-06-12
#### PASS 44 minutes
```
2025-06-12T01:54:44.2911393Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-12T01:54:44.2921202Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-12T01:54:44.3059456Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2670.92s)
```
### 2025-06-13
#### PASS 45 minutes
```
2025-06-13T01:55:30.6481134Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-13T01:55:30.6498022Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-13T01:55:30.6634893Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2710.39s)
```
### 2025-06-14
#### PASS an hour
```
2025-06-14T02:34:39.9643302Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-14T02:34:39.9664877Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-14T02:34:39.9819654Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (3698.81s)
```
### 2025-06-15
#### PASS 45 minutes
```
2025-06-15T01:56:51.5966712Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-15T01:56:51.5999168Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-15T01:56:51.6237577Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2729.83s)
```
### 2025-06-16
#### PASS an hour
```
2025-06-16T02:15:00.6572660Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-16T02:15:00.6598595Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-16T02:15:00.6720252Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (4173.78s)
```
### 2025-06-17
#### PASS 42 minutes
```
2025-06-17T01:54:49.3067924Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-17T01:54:49.3088621Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-17T01:54:49.3235271Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2560.18s)
```
### 2025-06-18
#### PASS 45 minutes
```
2025-06-18T01:55:10.7247785Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-18T01:55:10.7267601Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-18T01:55:10.7423031Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2713.03s)
```
#### PASS 39 minutes
```
2025-06-18T08:48:56.0177058Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-18T08:48:56.0185128Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-18T08:48:56.0334730Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2366.13s)
```
### 2025-06-19
#### PASS an hour
```
2025-06-19T02:33:55.9844293Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-19T02:33:55.9858690Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-19T02:33:56.0010827Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (5000.76s)
```
### 2025-06-20
#### PASS 42 minutes
```
2025-06-20T01:46:12.3364544Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-20T01:46:12.3390726Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-20T01:46:12.3513501Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2530.19s)
```
### 2025-06-21
#### PASS 38 minutes
```
2025-06-21T01:47:13.0107764Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-21T01:47:13.0122551Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-21T01:47:13.0254475Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2332.42s)
```
### 2025-06-22
#### FAIL 2 hours
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
### 2025-06-23
#### PASS 43 minutes
```
2025-06-23T01:49:14.0965005Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-23T01:49:14.0986882Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-23T01:49:14.1145023Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2580.45s)
```
### 2025-06-24
#### PASS 44 minutes
```
2025-06-24T02:00:03.6491364Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-24T02:00:03.6513498Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-24T02:00:03.6667691Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2650.99s)
```
### 2025-06-25
#### PASS 43 minutes
```
2025-06-25T01:46:02.2050461Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-25T01:46:02.2077457Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-25T01:46:02.2234832Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2622.13s)
```
### 2025-06-26
#### PASS 41 minutes
```
2025-06-26T01:58:04.8017751Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T01:58:04.8047218Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T01:58:04.8185486Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2512.41s)
```
#### PASS 42 minutes
```
2025-06-26T05:26:49.4867085Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T05:26:49.4898544Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T05:26:49.5041118Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2546.79s)
```