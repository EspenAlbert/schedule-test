# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 19 minutes
```
2025-05-28T02:03:35.3224009Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T02:03:35.3304615Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T02:03:35.3419308Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1151.01s)
```
#### FAIL 19 minutes
```
2025-05-28T12:04:46.9806760Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T12:04:46.9838798Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T12:04:47.0009857Z === NAME  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T12:04:47.0010548Z     resource_advanced_cluster_test.go:983: Step 1/3 error: Error running apply: exit status 1
2025-05-28T12:04:47.0010949Z         
2025-05-28T12:04:47.0011233Z         Error: error resolving container IDs
2025-05-28T12:04:47.0011505Z         
2025-05-28T12:04:47.0011979Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T12:04:47.0012623Z           on terraform_plugin_test.tf line 65, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T12:04:47.0013188Z           65: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T12:04:47.0013475Z         
2025-05-28T12:04:47.0013913Z         cluster name = test-acc-tf-c-5702567813895212895, error details: (503 Service
2025-05-28T12:04:47.0014523Z         Unavailable) failed to decode response body: undefined response type
2025-05-28T12:04:47.0026812Z    test_name=TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled test_terraform_path=/home/runner/work/_temp/0bbe0b64-86f0-4111-9a0b-d75d93ae70a5/terraform test_working_directory=/tmp/plugintest2409768101 test_step_number=1
2025-05-28T12:04:47.0066414Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1191.26s)
```
#### PASS 22 minutes
```
2025-05-28T13:47:12.0017712Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T13:47:12.0053033Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-28T13:47:12.0171554Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1355.02s)
```
### 2025-05-29
#### PASS 36 minutes
```
2025-05-29T02:20:21.7277639Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-29T02:20:21.7332459Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-29T02:20:21.7462588Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (2162.24s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T03:30:24.2319583Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-30T03:30:24.2355695Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-30T03:30:24.2462560Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (5182.31s)
```
#### PASS 23 minutes
```
2025-05-30T08:55:11.7567340Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-30T08:55:11.7617736Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-30T08:55:11.7741212Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1438.16s)
```
### 2025-05-31
#### PASS 21 minutes
```
2025-05-31T04:18:53.2249683Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-31T04:18:53.2281537Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-05-31T04:18:53.2404250Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1312.70s)
```
### 2025-06-01
#### PASS 28 minutes
```
2025-06-01T04:20:15.0540751Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T04:20:15.0581965Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T04:20:15.0715313Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1735.51s)
```
#### PASS 20 minutes
```
2025-06-01T08:29:24.1334682Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T08:29:24.1378218Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T08:29:24.1499097Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1258.09s)
```
#### PASS 19 minutes
```
2025-06-01T12:36:46.3888658Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T12:36:46.3934224Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T12:36:46.4062859Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1192.87s)
```
#### PASS 21 minutes
```
2025-06-01T16:46:33.8327657Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T16:46:33.8363673Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T16:46:33.8492884Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1311.15s)
```
#### PASS 22 minutes
```
2025-06-01T20:56:30.1353163Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T20:56:30.1414093Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-01T20:56:30.1540141Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1375.95s)
```
### 2025-06-02
#### PASS 19 minutes
```
2025-06-02T01:07:47.7492418Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T01:07:47.7534204Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T01:07:47.7735375Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1185.22s)
```
#### PASS 20 minutes
```
2025-06-02T04:19:30.0983827Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T04:19:30.1022099Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T04:19:30.1139882Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1245.52s)
```
#### PASS 25 minutes
```
2025-06-02T05:16:34.1943777Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T05:16:34.1969999Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T05:16:34.2109373Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1528.42s)
```
#### PASS 18 minutes
```
2025-06-02T09:30:51.2583118Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T09:30:51.2639954Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-02T09:30:51.2789102Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1137.84s)
```
### 2025-06-03
#### PASS 22 minutes
```
2025-06-03T02:00:08.0971012Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-03T02:00:08.1009340Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-03T02:00:08.1124134Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1363.68s)
```
### 2025-06-04
#### PASS 22 minutes
```
2025-06-04T01:50:55.4325228Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-04T01:50:55.4350459Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-04T01:50:55.4480012Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1322.17s)
```
### 2025-06-05
#### FAIL 7 seconds
```
2025-06-05T00:35:38.5900952Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.5949695Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.6073022Z === NAME  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-05T00:35:38.6073713Z     resource_advanced_cluster_test.go:983: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6074139Z         
2025-06-05T00:35:38.6074412Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6074676Z         
2025-06-05T00:35:38.6075001Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6075776Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6076371Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6076683Z         
2025-06-05T00:35:38.6077086Z         cluster name: test-acc-tf-c-478175005657945574, API error details:
2025-06-05T00:35:38.6077749Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters
2025-06-05T00:35:38.6078550Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6079250Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6079633Z         BadRequestDetail: 
2025-06-05T00:35:38.6096105Z   
2025-06-05T00:35:38.6385628Z --- FAIL: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (7.71s)
```
### 2025-06-06
#### PASS 22 minutes
```
2025-06-06T05:30:18.8772800Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-06T05:30:18.8830652Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-06T05:30:18.9040712Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1375.57s)
```
### 2025-06-07
#### PASS 33 minutes
```
2025-06-07T01:49:34.5057980Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-07T01:49:34.5085182Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-07T01:49:34.5216651Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1994.41s)
```
### 2025-06-08
#### PASS 20 minutes
```
2025-06-08T01:48:59.8868123Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-08T01:48:59.8925598Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-08T01:48:59.9030864Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1254.32s)
```
### 2025-06-09
#### PASS 23 minutes
```
2025-06-09T04:06:35.6353592Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-09T04:06:35.6386744Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-09T04:06:35.6501380Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1383.32s)
```
### 2025-06-10
#### PASS 45 minutes
```
2025-06-10T02:43:46.9810018Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-10T02:43:46.9840973Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-10T02:43:46.9976357Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (2715.82s)
```
### 2025-06-11
#### PASS 22 minutes
```
2025-06-11T01:51:36.5513008Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-11T01:51:36.5551311Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-11T01:51:36.5669344Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1320.10s)
```
#### PASS 21 minutes
```
2025-06-11T09:05:12.3230406Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-11T09:05:12.3287812Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-11T09:05:12.3497400Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1286.60s)
```
### 2025-06-12
#### PASS 23 minutes
```
2025-06-12T01:54:44.2897341Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-12T01:54:44.2930768Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-12T01:54:44.3050379Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1412.27s)
```
### 2025-06-13
#### PASS 27 minutes
```
2025-06-13T01:55:30.6467216Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-13T01:55:30.6508345Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-13T01:55:30.6626688Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1635.70s)
```
### 2025-06-14
#### PASS 28 minutes
```
2025-06-14T02:34:39.9629128Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-14T02:34:39.9653090Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-14T02:34:39.9809388Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1727.43s)
```
### 2025-06-15
#### PASS 22 minutes
```
2025-06-15T01:56:51.5943183Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-15T01:56:51.5982645Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-15T01:56:51.6222695Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1351.55s)
```
### 2025-06-16
#### PASS 27 minutes
```
2025-06-16T02:15:00.6558705Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-16T02:15:00.6599961Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-16T02:15:00.6709248Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1675.43s)
```
### 2025-06-17
#### PASS 19 minutes
```
2025-06-17T01:54:49.3053743Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-17T01:54:49.3089115Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-17T01:54:49.3219819Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1156.07s)
```
### 2025-06-18
#### PASS 23 minutes
```
2025-06-18T01:55:10.7233665Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-18T01:55:10.7268075Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-18T01:55:10.7412660Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1407.22s)
```
#### PASS 22 minutes
```
2025-06-18T08:48:56.0162530Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-18T08:48:56.0195382Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-18T08:48:56.0326050Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1346.72s)
```
### 2025-06-19
#### PASS 46 minutes
```
2025-06-19T02:33:55.9830025Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-19T02:33:55.9863848Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-19T02:33:55.9982171Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (2818.33s)
```
### 2025-06-20
#### PASS 19 minutes
```
2025-06-20T01:46:12.3350462Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-20T01:46:12.3376709Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-20T01:46:12.3496593Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1159.17s)
```
### 2025-06-21
#### PASS 20 minutes
```
2025-06-21T01:47:13.0093851Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-21T01:47:13.0129474Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-21T01:47:13.0245345Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1226.84s)
```
### 2025-06-22
#### PASS 19 minutes
```
2025-06-22T03:04:12.6120350Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-22T03:04:12.6150394Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-22T03:04:12.6372802Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1192.02s)
```
### 2025-06-23
#### PASS 21 minutes
```
2025-06-23T01:49:14.0939991Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-23T01:49:14.1002914Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-23T01:49:14.1136168Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1288.93s)
```
### 2025-06-24
#### PASS 30 minutes
```
2025-06-24T02:00:03.6477479Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-24T02:00:03.6512655Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-24T02:00:03.6653488Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1812.48s)
```
### 2025-06-25
#### PASS 19 minutes
```
2025-06-25T01:46:02.2025788Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-25T01:46:02.2093293Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-25T01:46:02.2226450Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1179.64s)
```
### 2025-06-26
#### PASS 25 minutes
```
2025-06-26T01:58:04.8004030Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-26T01:58:04.8062131Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-26T01:58:04.8173475Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1501.64s)
```
#### PASS 18 minutes
```
2025-06-26T05:26:49.4841593Z === RUN   TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-26T05:26:49.4894037Z === CONT  TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema
2025-06-26T05:26:49.5032179Z --- PASS: TestAccClusterAdvancedClusterConfig_geoShardedTransitionFromOldToNewSchema (1137.60s)
```