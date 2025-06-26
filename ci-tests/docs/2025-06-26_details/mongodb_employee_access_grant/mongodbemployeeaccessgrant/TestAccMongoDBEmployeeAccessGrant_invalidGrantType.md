# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantType Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS a moment
```
2025-05-28T00:47:46.3208956Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-05-28T00:47:46.7102141Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.39s)
```
#### PASS a moment
```
2025-05-28T08:47:10.9320744Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-05-28T08:47:11.3993046Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.47s)
```
### 2025-05-29
#### PASS a moment
```
2025-05-29T00:46:31.5944656Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-05-29T00:46:31.9511303Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.36s)
```
### 2025-05-30
#### PASS a moment
```
2025-05-30T00:45:41.4409222Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-05-30T00:45:41.8300436Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.39s)
```
### 2025-05-31
#### PASS a moment
```
2025-05-31T00:46:02.0503928Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-05-31T00:46:02.5300656Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.48s)
```
### 2025-06-01
#### PASS a moment
```
2025-06-01T00:48:55.0875620Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-01T00:48:55.5512019Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.46s)
```
#### PASS a moment
```
2025-06-01T04:57:37.0339134Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-01T04:57:37.4303364Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.40s)
```
#### PASS a moment
```
2025-06-01T09:07:55.8730293Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-01T09:07:56.2904119Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.42s)
```
#### PASS a moment
```
2025-06-01T13:18:16.1493999Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-01T13:18:16.5301519Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.38s)
```
#### PASS a moment
```
2025-06-01T17:26:22.7706923Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-01T17:26:23.1591607Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.39s)
```
#### PASS a moment
```
2025-06-01T21:34:39.7425360Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-01T21:34:40.1156157Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.37s)
```
### 2025-06-02
#### PASS a moment
```
2025-06-02T00:48:04.3143584Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-02T00:48:04.6498245Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.34s)
```
#### PASS a moment
```
2025-06-02T01:44:22.2747141Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-02T01:44:22.7706169Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.50s)
```
#### PASS a moment
```
2025-06-02T05:59:09.6189135Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-02T05:59:09.9883144Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.37s)
```
### 2025-06-03
#### PASS a moment
```
2025-06-03T00:47:07.1182514Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-03T00:47:07.4613619Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.34s)
```
### 2025-06-04
#### PASS a moment
```
2025-06-04T00:38:16.0751280Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-04T00:38:16.5441012Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.47s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:40:44.5546729Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-05T00:40:44.5547337Z     resource_test.go:100: Creating execution cluster: test-acc-tf-c-5070460160567919769
2025-06-05T00:40:45.0842279Z 2025/06/05 00:40:45 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:43:45.2766462Z     resource_test.go:100: 
2025-06-05T00:43:45.2767869Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:43:45.2770224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:43:45.2772465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:100
2025-06-05T00:43:45.2773416Z         	Error:      	Received unexpected error:
2025-06-05T00:43:45.2776604Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-5070460160567919769 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:43:45.2778002Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-05T00:43:45.2780230Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5070460160567919769, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-5070460160567919769 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:43:45.2781693Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (180.72s)
```
### 2025-06-06
#### PASS a moment
```
2025-06-06T00:40:07.4222126Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-06T00:40:07.7640408Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.34s)
```
### 2025-06-07
#### PASS a moment
```
2025-06-07T00:38:54.8169258Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-07T00:38:55.2519938Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.44s)
```
### 2025-06-08
#### PASS a moment
```
2025-06-08T00:42:06.3061303Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-08T00:42:06.6541591Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.35s)
```
### 2025-06-09
#### PASS a moment
```
2025-06-09T00:40:05.5366509Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-09T00:40:06.0227224Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.49s)
```
### 2025-06-10
#### PASS a moment
```
2025-06-10T00:50:25.4420075Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-10T00:50:25.9079959Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.47s)
```
### 2025-06-11
#### PASS a moment
```
2025-06-11T00:37:50.7104811Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-11T00:37:51.1685375Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.46s)
```
#### PASS a moment
```
2025-06-11T07:47:25.3841551Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-11T07:47:25.7339555Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.35s)
```
### 2025-06-12
#### PASS a moment
```
2025-06-12T00:38:25.6996950Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-12T00:38:26.0286736Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.33s)
```
### 2025-06-13
#### PASS a moment
```
2025-06-13T00:38:49.5725107Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-13T00:38:50.0618482Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.49s)
```
### 2025-06-14
#### PASS a moment
```
2025-06-14T00:37:16.7426596Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-14T00:37:17.2052994Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.46s)
```
### 2025-06-15
#### PASS a moment
```
2025-06-15T00:43:02.0196942Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-15T00:43:02.3464344Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.33s)
```
### 2025-06-16
#### PASS a moment
```
2025-06-16T00:38:59.8959537Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-16T00:39:00.2981107Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.40s)
```
### 2025-06-17
#### PASS a moment
```
2025-06-17T00:38:58.6797929Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-17T00:38:59.0234208Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.34s)
```
### 2025-06-18
#### PASS a moment
```
2025-06-18T00:38:00.8574101Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-18T00:38:01.3543260Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.50s)
```
### 2025-06-19
#### PASS a moment
```
2025-06-19T00:44:17.7169479Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-19T00:44:18.1864381Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.47s)
```
### 2025-06-20
#### PASS a moment
```
2025-06-20T00:38:56.5904275Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-20T00:38:57.0647042Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.47s)
```
### 2025-06-21
#### PASS a moment
```
2025-06-21T00:37:22.0511199Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-21T00:37:22.4016759Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.35s)
```
### 2025-06-22
#### PASS a moment
```
2025-06-22T00:41:51.7799218Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-22T00:41:52.1060647Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.33s)
```
### 2025-06-23
#### PASS a moment
```
2025-06-23T00:38:40.6013889Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-23T00:38:40.9522941Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.35s)
```
### 2025-06-24
#### PASS a moment
```
2025-06-24T00:38:01.5323196Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-24T00:38:02.0137117Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.48s)
```
### 2025-06-25
#### PASS a moment
```
2025-06-25T00:38:04.7769046Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-25T00:38:05.1483405Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.37s)
```
### 2025-06-26
#### PASS a moment
```
2025-06-26T00:36:47.5309263Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantType
2025-06-26T00:36:47.8788553Z --- PASS: TestAccMongoDBEmployeeAccessGrant_invalidGrantType (0.35s)
```